package com.codesquad.baseballgame.global.github.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter @ToString
@RequiredArgsConstructor
public class User {

    @JsonProperty("login")
    private String userId;
}
