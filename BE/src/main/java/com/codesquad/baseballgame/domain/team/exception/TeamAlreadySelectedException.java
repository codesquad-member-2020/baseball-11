package com.codesquad.baseballgame.domain.team.exception;

public class TeamAlreadySelectedException extends RuntimeException{
    public TeamAlreadySelectedException() {
        super("다른 유저가 이미 선택했습니다.");
    }
}
