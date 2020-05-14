package com.codesquad.baseballgame.domain.game.service;

import com.codesquad.baseballgame.domain.team.dao.TeamDao;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MatchService {

    private final TeamDao teamDao;

    @Transactional(isolation = Isolation.SERIALIZABLE)
    public Boolean matchStatus(int id) {
        return countMatchUser(id) == 2;
    }

    public Integer countMatchUser(int id) {
        return teamDao.countMatchUser(id);
    }
}
