package com.codesquad.baseballgame.global.github;

import com.codesquad.baseballgame.global.config.GithubOauthProperty;
import com.codesquad.baseballgame.global.github.domain.GithubToken;
import com.codesquad.baseballgame.global.github.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
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

    public GithubToken getGithubAccessToken(String code) {
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

    public User getUserId(GithubToken githubToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("authorization", getAuthorizationValue(githubToken));
        ResponseEntity<User> responseEntity = new RestTemplate().exchange(GITHUB_API_URL, HttpMethod.GET,
                new HttpEntity<>(headers), User.class);

        return responseEntity.getBody();
    }

    private MultiValueMap<String, String> requestAccess() {
        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        Map<String, String> header = new HashMap<>();
        header.put("Accept", "application/json");
        headers.setAll(header);
        return headers;
    }

    private String getAuthorizationValue(GithubToken githubToken) {
        StringBuilder sb = new StringBuilder();
        sb.append(githubToken.getTokenType());
        sb.append(" ");
        sb.append(githubToken.getAccessToken());
        return sb.toString();
    }
}
