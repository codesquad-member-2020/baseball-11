package com.codesquad.baseballgame.domain.team.dao;

import com.codesquad.baseballgame.domain.team.dto.TeamDataDto;
import com.codesquad.baseballgame.domain.team.dto.TeamDto;
import com.codesquad.baseballgame.domain.team.dto.TeamSideDto;
import com.codesquad.baseballgame.domain.team.service.TeamService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
class TeamDaoTest {

    @Autowired
    private TeamDao teamDao;

    @Autowired
    private TeamService teamService;

    @Test
    public void id로_팀가져오기() {
        TeamDto teamDto = teamDao.findAwayTeamById(1);
        System.out.println(teamDto.toString());
    }

    @Test
    public void 팀리스트가져오기() {
        TeamDataDto teamDataDto = teamService.showTeamList();
        System.out.println(teamDataDto.toString());
    }

    @Test
    public void 숫자가져오기() {
        int number = teamDao.countAllGame();
        assertThat(number).isEqualTo(5);
    }

    @Test
    public void 팀숫자가져오기() {
        Integer teamNumber = teamDao.findAwayTeamIdById(1);
        System.out.println(teamNumber);
    }

    @Test
    public void 유저수가져오기() {
        Integer userCount = teamDao.countMatchUser(1);
        System.out.println(userCount);
    }
}
