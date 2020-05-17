package com.codesquad.baseballgame.domain.game.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter @ToString
@RequiredArgsConstructor
public class GameDto {

    private int inning;
    private String topBottom;
    private String position;
}
