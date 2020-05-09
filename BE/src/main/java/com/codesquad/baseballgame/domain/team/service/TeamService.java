package com.codesquad.baseballgame.domain.team.service;

import com.codesquad.baseballgame.domain.team.dao.TeamDao;
import com.codesquad.baseballgame.domain.team.dto.TeamDataDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TeamService {

    private final TeamDao teamDao;

//    public TeamDataDto showTeamList() {
//        return teamDao.teamDto();
//    }
}
