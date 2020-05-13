package com.codesquad.baseballgame.domain.hitter.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter @ToString
@RequiredArgsConstructor
public class HitterTeamDto {

    private HitterListDto away;
    private HitterListDto home;

    @Builder
    public HitterTeamDto(HitterListDto away, HitterListDto home) {
        this.away = away;
        this.home = home;
    }
}
