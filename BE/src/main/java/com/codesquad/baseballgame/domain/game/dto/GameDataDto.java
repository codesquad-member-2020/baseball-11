package com.codesquad.baseballgame.domain.game.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter @ToString
@RequiredArgsConstructor
public class GameDataDto {

    private BallCountDto ballCount;
    private BaseCountDto baseCount;
    private GameDto game;
}
