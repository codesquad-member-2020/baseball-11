package com.codesquad.baseballgame.domain.team.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class TeamDto {

    private final int id;
    private final String name;
    private final String user;

    @Builder
    public TeamDto(int id, String name, String user) {
        this.id = id;
        this.name = name;
        this.user = user;
    }
}
