package com.codesquad.baseballgame.global.github.controller;

import com.codesquad.baseballgame.global.github.dto.UserDto;
import com.codesquad.baseballgame.global.github.service.GithubLoginService;
import com.codesquad.baseballgame.global.utils.JwtUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Log4j2
@RestController
@RequiredArgsConstructor
public class GithubLoginController {

    private final GithubLoginService githubLoginService;

    @GetMapping("/githublogin")
    public ResponseEntity<String> oauth(@RequestParam("code") String code,
                                        HttpServletRequest request,
                                   HttpServletResponse response) {
        return buildCookieResponseEntity(code, request, response);
    }

    @GetMapping("/ioslogin")
    public ResponseEntity<String> iosOauth(@RequestParam("code") String code,
                                           HttpServletRequest request,
                                        HttpServletResponse response) {
        return buildCookieResponseEntity(code, request, response);
    }

    private ResponseEntity<String> buildCookieResponseEntity(@RequestParam("code") String code,
                                                             HttpServletRequest request,
                                                             HttpServletResponse response) {
        UserDto githubUser = githubLoginService.returnUserId(code);
        String jwt = JwtUtils.jwtCreate(githubUser);
        Cookie cookie = new Cookie("userId", jwt);
        cookie.setMaxAge(60 * 10);
        cookie.setPath("/");
        response.addCookie(cookie);
        if (!request.getHeader("User-Agent").contains("Phone")) {
            response.setHeader("Location", "http://13.209.254.74/select");
        } else {
            log.info("############### Hi I'm iPhone");
            response.setHeader("Location", "baseball://?token=" + jwt);
        }

        String user = JwtUtils.jwtParsing(jwt);

        return new ResponseEntity<>(user, HttpStatus.FOUND);
    }
}
