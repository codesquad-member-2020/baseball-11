package com.codesquad.baseballgame.domain.game.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MatchServiceTest {

    @Autowired
    private MatchService matchService;

    @Test
    public void 매칭유저수확인() {
        System.out.println(matchService.countMatchUser(1));
    }

    @Test
    public void 매칭유저확인() {
        System.out.println(matchService.matchStatus(2));
    }
}
