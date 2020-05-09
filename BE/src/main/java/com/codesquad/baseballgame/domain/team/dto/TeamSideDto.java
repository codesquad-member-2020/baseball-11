package com.codesquad.baseballgame.domain.team.dto;

;
import lombok.Getter;

import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@ToString
public class TeamSideDto {

    private int gameNumber;
    private List<TeamDto> teamDtos = new ArrayList<>();

}
