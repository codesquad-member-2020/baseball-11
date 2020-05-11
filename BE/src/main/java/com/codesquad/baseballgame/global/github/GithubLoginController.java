package com.codesquad.baseballgame.global.github;

import com.codesquad.baseballgame.global.github.domain.GithubToken;
import com.codesquad.baseballgame.global.github.domain.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@Log4j2
@RestController
@RequiredArgsConstructor
public class GithubLoginController {

    private final GithubLoginService githubLoginService;

    @GetMapping("/githublogin")
    public ResponseEntity<User> oauth(@RequestParam("code") String code,
                                   HttpServletResponse response) {
        GithubToken githubToken = githubLoginService.getGithubAccessToken(code);
        User githubUser = githubLoginService.getUserId(githubToken);
        String jwt = githubLoginService.buildJwt(githubUser);

        Cookie cookie = new Cookie("userId", jwt);
        response.addCookie(cookie);
        return new ResponseEntity<>(githubUser, HttpStatus.OK);
    }
}
