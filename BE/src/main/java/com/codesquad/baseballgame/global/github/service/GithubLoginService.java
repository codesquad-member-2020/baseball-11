package com.codesquad.baseballgame.global.github.service;

import com.codesquad.baseballgame.global.config.GithubOauthProperty;
import com.codesquad.baseballgame.global.github.dao.UserDao;
import com.codesquad.baseballgame.global.github.dto.GithubToken;
import com.codesquad.baseballgame.global.github.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class GithubLoginService {

    private final String GITHUB_API_URL = "https://api.github.com/user";
    private final GithubOauthProperty githubOauth;
    private final UserDao userDao;

    @Transactional(isolation = Isolation.SERIALIZABLE)
    public UserDto returnUserId(String code) {
        UserDto userDto = getUserId(code);
        try {
            findUserDto(userDto.getUserId());
        } catch (RuntimeException e) {
            userDao.saveUserDao(userDto);
        }

        return userDto;
    }

    private MultiValueMap<String, String> requestAccess() {
        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        Map<String, String> header = new HashMap<>();
        header.put("Accept", "application/json");
        headers.setAll(header);
        return headers;
    }

    private GithubToken getGithubAccessToken(String code) {
        MultiValueMap<String, String> requestHeaders = new LinkedMultiValueMap<>();
        Map<String, String> requestHeader = new HashMap<>();
        requestHeader.put("client_id", githubOauth.getClientId());
        requestHeader.put("client_secret", githubOauth.getClientSecret());
        requestHeader.put("code", code);
        requestHeaders.setAll(requestHeader);

        HttpEntity<?> request = new HttpEntity<>(requestHeaders, requestAccess());
        ResponseEntity<GithubToken> response = new RestTemplate().postForEntity(githubOauth.getUrl(), request, GithubToken.class);
        return response.getBody();
    }

    private UserDto getUserId(String code) {
        GithubToken githubToken = getGithubAccessToken(code);
        HttpHeaders headers = new HttpHeaders();
        headers.set("authorization", getAuthorizationValue(githubToken));
        ResponseEntity<UserDto> responseEntity = new RestTemplate().exchange(GITHUB_API_URL, HttpMethod.GET,
                new HttpEntity<>(headers), UserDto.class);

        return responseEntity.getBody();
    }

    private void findUserDto(String userId) {
        userDao.findUserDtoById(userId);
    }

    private String getAuthorizationValue(GithubToken githubToken) {
        StringBuilder sb = new StringBuilder();
        sb.append(githubToken.getTokenType());
        sb.append(" ");
        sb.append(githubToken.getAccessToken());
        return sb.toString();
    }
}
