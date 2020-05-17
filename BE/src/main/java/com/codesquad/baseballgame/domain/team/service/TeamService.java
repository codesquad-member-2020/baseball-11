package com.codesquad.baseballgame.domain.team.service;

import com.codesquad.baseballgame.domain.team.dao.TeamDao;
import com.codesquad.baseballgame.domain.team.dto.TeamDataDto;
import com.codesquad.baseballgame.domain.team.dto.TeamDto;
import com.codesquad.baseballgame.domain.team.dto.TeamSideDto;
import com.codesquad.baseballgame.domain.team.exception.TeamAlreadySelectedException;
import com.codesquad.baseballgame.global.error.exception.UserNotFoundException;
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
            teamSideDtos.add(makeTeamSideDto(i + 1));
        }
        return new TeamDataDto(teamSideDtos);
    }

    public Boolean selectTeam(int teamId, String user) {
        if (userDao.countIdByUserId(user) == 0) {
            throw new UserNotFoundException();
        }

        if (!teamDao.isUserEmpty(teamId)) {
            throw new TeamAlreadySelectedException();
        }

        int userId = userDao.findIdByUserId(user);
        teamDao.saveTeamByUser(userId, teamId);

        return true;
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
