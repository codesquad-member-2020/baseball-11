package com.codesquad.baseballgame.global.github.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class UserDto {

    @JsonProperty("login")
    private String userId;

    @Builder
    public UserDto(String userId) {
        this.userId = userId;
    }
}
