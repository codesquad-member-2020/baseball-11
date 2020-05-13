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
                .away(buildAwayHitterListDto(id))
                .home(buildHomeHitterListDto(id))
                .build();
    }

    private HitterListDto buildAwayHitterListDto(int id) {
        int awayTeamNumber = teamDao.findAwayTeamIdById(id);
        HitterListDto awayHitterListDto = hitterDao.findTotalByTeamId(awayTeamNumber);
        List<HitterInfoDto> awayTeamList = new ArrayList<>();
        for (int i = 0; i < hitterDao.countHitter(); i++) {
            awayTeamList.add(hitterDao.findHitterById(awayTeamNumber, i + 1));
        }
        awayHitterListDto.setTeamInfo(awayTeamList);
        return awayHitterListDto;
    }

    private HitterListDto buildHomeHitterListDto(int id) {
        int homeTeamNumber = teamDao.findHomeTeamIdById(id);
        HitterListDto homeHitterListDto = hitterDao.findTotalByTeamId(homeTeamNumber);
        List<HitterInfoDto> homeTeamList = new ArrayList<>();
        for (int i = 0; i < hitterDao.countHitter(); i++) {
            homeTeamList.add(hitterDao.findHitterById(homeTeamNumber, i + 1));
        }
        homeHitterListDto.setTeamInfo(homeTeamList);
        return homeHitterListDto;
    }
}
