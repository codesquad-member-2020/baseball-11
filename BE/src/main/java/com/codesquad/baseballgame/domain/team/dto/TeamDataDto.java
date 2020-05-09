package com.codesquad.baseballgame.domain.team.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Getter @ToString
public class TeamDataDto {

    private final List<TeamSideDto> teamData;

    @Builder
    public TeamDataDto(List<TeamSideDto> teamData) {
        this.teamData = teamData;
    }
}
