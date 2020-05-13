package com.codesquad.baseballgame.domain.hitter.dao;

import com.codesquad.baseballgame.domain.hitter.dto.HitterInfoDto;
import com.codesquad.baseballgame.domain.hitter.dto.HitterListDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class HitterDaoTest {

    @Autowired
    private HitterDao hitterDao;

    @Test
    public void 팀원인포() {
        HitterInfoDto hitter = hitterDao.findHitterById(1,1);
        System.out.println(hitter);
    }

    @Test
    public void 토탈팀출력() {
        HitterListDto hitterListDto = hitterDao.findTotalByTeamId(1);
        System.out.println(hitterListDto);
    }
}
