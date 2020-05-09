package com.codesquad.baseballgame.domain.team.dao;

import com.codesquad.baseballgame.domain.team.dto.TeamDto;
import com.codesquad.baseballgame.domain.team.mapper.TeamDtoMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class TeamDao {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    private final TeamDtoMapper teamDtoMapper = new TeamDtoMapper();

    public TeamDao(DataSource dataSource) {
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public TeamDto findTeamDto(int teamId) {
        SqlParameterSource nameParameters = new MapSqlParameterSource().addValue("id", teamId);
        String teamInfoSql = "SELECT t.name, u.user_id, t.stadium " +
                "FROM team t " +
                "LEFT JOIN user u ON t.user_id = u.id " +
                "WHERE t.id = :id";
        TeamDto teamDto = namedParameterJdbcTemplate.queryForObject(teamInfoSql, nameParameters, teamDtoMapper);


        return teamDto;
    }

    public void TeamSideDto() {

    }

}
