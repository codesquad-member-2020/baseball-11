package com.codesquad.baseballgame.domain.hitter.dto;

import lombok.*;

import java.util.List;

@Getter @ToString @Setter
@RequiredArgsConstructor
public class HitterListDto {

    private String teamName;
    private List<HitterInfoDto> teamInfo;
    private int totalsBatterBox;
    private int totalsHit;
    private int totalsOut;

    @Builder
    public HitterListDto(String teamName, List<HitterInfoDto> teamInfo, int totalsBatterBox, int totalsHit, int totalsOut) {
        this.teamName = teamName;
        this.teamInfo = teamInfo;
        this.totalsBatterBox = totalsBatterBox;
        this.totalsHit = totalsHit;
        this.totalsOut = totalsOut;
    }
}
