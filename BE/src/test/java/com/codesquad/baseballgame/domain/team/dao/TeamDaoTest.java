package com.codesquad.baseballgame.domain.team.dao;

import com.codesquad.baseballgame.domain.team.dto.TeamDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TeamDaoTest {

    @Autowired
    private TeamDao teamDao;

    @Test
    public void 팀리스트() {
        TeamDto teamDto = teamDao.teamDto(2);
        System.out.println(teamDto.toString());
    }
}
