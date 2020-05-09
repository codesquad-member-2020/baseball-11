package com.codesquad.baseballgame.domain.team.dto;

import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Getter @ToString
public class TeamDataDto {

    private final List<TeamSideDto> teamData;

    public TeamDataDto(List<TeamSideDto> teamData) {
        this.teamData = teamData;
    }
}
