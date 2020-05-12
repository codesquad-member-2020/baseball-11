package com.codesquad.baseballgame.domain.team.service;

import com.codesquad.baseballgame.domain.team.dao.TeamDao;
import com.codesquad.baseballgame.domain.team.dto.TeamDataDto;
import com.codesquad.baseballgame.domain.team.dto.TeamDto;
import com.codesquad.baseballgame.domain.team.dto.TeamSideDto;
import com.codesquad.baseballgame.global.github.dao.UserDao;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TeamService {

    private final TeamDao teamDao;
    private final UserDao userDao;

    public TeamDataDto showTeamList() {
        List<TeamSideDto> teamSideDtos = new ArrayList<>();
        for (int i = 0; i < teamDao.countAllGame(); i++) {
            teamSideDtos.add(makeTeamSideDto(i+1));
        }
        return new TeamDataDto(teamSideDtos);
    }

    public void selectTeam(int teamId, String user) {
        int userId = userDao.findIdByUserId(user);
        teamDao.saveTeamByUser(userId, teamId);
    }

    private TeamSideDto makeTeamSideDto(int id) {
        TeamDto awayTeamDto = teamDao.findAwayTeamById(id);
        TeamDto homeTeamDto = teamDao.findHomeTeamById(id);
        return TeamSideDto.builder()
                .gameNumber(id)
                .away(awayTeamDto)
                .home(homeTeamDto)
                .build();
    }
}
