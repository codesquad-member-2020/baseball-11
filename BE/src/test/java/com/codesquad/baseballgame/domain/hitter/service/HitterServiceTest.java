package com.codesquad.baseballgame.domain.hitter.service;

import com.codesquad.baseballgame.domain.hitter.dto.HitterListDto;
import com.codesquad.baseballgame.domain.hitter.dto.HitterTeamDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class HitterServiceTest {

    @Autowired
    private HitterService hitterService;

    @Test
    public void 팀토탈확인() {
        HitterTeamDto hitterTeamDto = hitterService.showHitterStatus(1);
        System.out.println(hitterTeamDto.toString());
    }

//    @Test
//    public void 홈팀토탈() {
//        HitterListDto homeTeam = hitterService.buildHomeHitterListDto(1);
//        System.out.println(homeTeam.toString());
//    }
}
