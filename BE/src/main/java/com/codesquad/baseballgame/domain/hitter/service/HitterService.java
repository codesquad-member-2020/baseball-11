package com.codesquad.baseballgame.domain.hitter.service;

import com.codesquad.baseballgame.domain.hitter.dao.HitterDao;
import com.codesquad.baseballgame.domain.hitter.dto.HitterInfoDto;
import com.codesquad.baseballgame.domain.hitter.dto.HitterListDto;
import com.codesquad.baseballgame.domain.hitter.dto.HitterTeamDto;
import com.codesquad.baseballgame.domain.team.dao.TeamDao;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HitterService {

    private final HitterDao hitterDao;
    private final TeamDao teamDao;

    public HitterTeamDto showHitterStatus(int id) {
        return HitterTeamDto.builder()
                .away(getHitterListDto(teamDao.findAwayTeamIdById(id)))
                .home(getHitterListDto(teamDao.findHomeTeamIdById(id)))
                .build();
    }

    private HitterListDto getHitterListDto(int teamNumber) {
        HitterListDto hitterListDto = hitterDao.findTotalByTeamId(teamNumber);
        List<HitterInfoDto> teamList = new ArrayList<>();
        for (int i = 0; i < hitterDao.countHitter(); i++) {
            teamList.add(hitterDao.findHitterById(teamNumber, i + 1));
        }
        hitterListDto.setTeamInfo(teamList);
        return hitterListDto;
    }
}
