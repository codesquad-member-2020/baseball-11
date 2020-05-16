package com.codesquad.baseballgame.domain.game.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter @ToString
@RequiredArgsConstructor
public class BallCountDto {

    private int strike;
    private int ball;
    private int out;
}
