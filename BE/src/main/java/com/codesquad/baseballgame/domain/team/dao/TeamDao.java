package com.codesquad.baseballgame.domain.team.dao;

import com.codesquad.baseballgame.domain.team.dto.TeamDto;
import com.codesquad.baseballgame.domain.team.mapper.TeamDtoMapper;
import org.omg.SendingContext.RunTime;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.Map;

@Repository
public class TeamDao {

    private final NamedParameterJdbcTemplate namedJdbcTemplate;
    private final TeamDtoMapper teamDtoMapper = new TeamDtoMapper();

    public TeamDao(DataSource dataSource) {
        this.namedJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public TeamDto findAwayTeamById(int id) {
        SqlParameterSource nameParameters = new MapSqlParameterSource().addValue("id", id);
        String teamInfoSql = "SELECT t.name, u.user_id " +
                "FROM team t " +
                "LEFT JOIN user u ON t.user_id = u.id LEFT JOIN side s on t.side_id = s.id " +
                "WHERE t.side_id = 1 " +
                "AND t.score_board_id = :id";

        return namedJdbcTemplate.queryForObject(teamInfoSql, nameParameters, teamDtoMapper);
    }

    public TeamDto findHomeTeamById(int id) {
        SqlParameterSource nameParameters = new MapSqlParameterSource().addValue("id", id);
        String teamInfoSql = "SELECT t.name, u.user_id " +
                "FROM team t " +
                "LEFT JOIN user u ON t.user_id = u.id LEFT JOIN side s on t.side_id = s.id " +
                "WHERE t.side_id = 2 " +
                "AND t.score_board_id = :id";

        return namedJdbcTemplate.queryForObject(teamInfoSql, nameParameters, teamDtoMapper);
    }

    public Integer countAllGame() {
        String sql = "SELECT COUNT(DISTINCT score_board_id) FROM team";
        return namedJdbcTemplate.getJdbcTemplate().queryForObject(sql, Integer.class);
    }
}
