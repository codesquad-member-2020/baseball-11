package com.codesquad.baseballgame.global.error;

import com.codesquad.baseballgame.domain.team.exception.TeamAlreadySelectedException;
import com.codesquad.baseballgame.global.error.exception.UserNotFoundException;
import io.jsonwebtoken.JwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class GlobalRestControllerAdvice {

    @ExceptionHandler(JwtException.class)
    protected ResponseEntity<String> jwtExceptionHandler(JwtException e) {
        log.error("Handle JwtException:", e);
        return new ResponseEntity<>("잘못된 JwtToken 입니다.", HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(UserNotFoundException.class)
    protected  ResponseEntity<String> userNotFoundExceptionHandler(UserNotFoundException e) {
        log.error("Handle UserNotFoundException:", e);
        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(TeamAlreadySelectedException.class)
    protected ResponseEntity<Boolean> teamAlreadySelectedHandler(TeamAlreadySelectedException e) {
        log.error("Handle TeamAlreadySelectedException:", e);
        return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
    }
}
