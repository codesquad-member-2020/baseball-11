package com.codesquad.baseballgame.domain.team.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class TeamSideDto {

    private final int gameNumber;
    private final TeamDto away;
    private final TeamDto home;

    @Builder
    public TeamSideDto(int gameNumber, TeamDto away, TeamDto home) {
        this.gameNumber = gameNumber;
        this.away = away;
        this.home = home;
    }
}
