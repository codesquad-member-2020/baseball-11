package com.codesquad.baseballgame.domain.team.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class TeamDto {

    private final String name;
    private final String user;

    @Builder
    public TeamDto(String name, String user) {
        this.name = name;
        this.user = user;
    }
}
