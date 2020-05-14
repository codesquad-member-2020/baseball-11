package com.codesquad.baseballgame.domain.scoreboard.dao;

import com.codesquad.baseballgame.domain.scoreboard.dto.ScoreBoardInningDto;
import com.codesquad.baseballgame.domain.team.mapper.TeamDtoMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class ScoreBoardDao {

    private final NamedParameterJdbcTemplate namedJdbcTemplate;
    private final TeamDtoMapper teamDtoMapper = new TeamDtoMapper();

    public ScoreBoardDao(DataSource dataSource) {
        this.namedJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public ScoreBoardInningDto findInningById(int id) {
        String inningSql = ""
    }
}
