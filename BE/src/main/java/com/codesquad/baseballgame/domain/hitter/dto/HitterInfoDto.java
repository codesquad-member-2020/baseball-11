package com.codesquad.baseballgame.domain.hitter.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter @ToString
@RequiredArgsConstructor
public class HitterInfoDto {

    private int battingOrder;
    private String name;
    private int batterBox;
    private int hit;
    private int out;
    private double average;

    @Builder
    public HitterInfoDto(int battingOrder, String name, int batterBox, int hit, int out, double average) {
        this.battingOrder = battingOrder;
        this.name = name;
        this.batterBox = batterBox;
        this.hit = hit;
        this.out = out;
        this.average = average;
    }
}
