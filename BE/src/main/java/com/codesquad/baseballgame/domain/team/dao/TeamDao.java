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

    private final NamedParameterJdbcTemplate namedJdbcTemplate;
    private final TeamDtoMapper teamDtoMapper = new TeamDtoMapper();

    public TeamDao(DataSource dataSource) {
        this.namedJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public TeamDto findAwayTeamById(int id) {
        String teamInfoSql = "SELECT t.id, t.name, u.user_id " +
                "FROM team t " +
                "LEFT JOIN user u ON t.user_id = u.id LEFT JOIN side s on t.side_id = s.id " +
                "WHERE t.side_id = 1 " +
                "AND t.score_board_id = :id";
        SqlParameterSource parameters = new MapSqlParameterSource("id", id);

        return namedJdbcTemplate.queryForObject(teamInfoSql, parameters, teamDtoMapper);
    }

    public Integer findAwayTeamIdById(int id) {
        String teamIdSql = "SELECT t.id FROM team t WHERE t.side_id = 1 AND t.score_board_id = :id";
        SqlParameterSource parameters = new MapSqlParameterSource("id", id);
        return namedJdbcTemplate.queryForObject(teamIdSql, parameters, Integer.class);
    }

    public TeamDto findHomeTeamById(int id) {
        String teamInfoSql = "SELECT t.id, t.name, u.user_id " +
                "FROM team t " +
                "LEFT JOIN user u ON t.user_id = u.id LEFT JOIN side s on t.side_id = s.id " +
                "WHERE t.side_id = 2 " +
                "AND t.score_board_id = :id";
        SqlParameterSource parameters = new MapSqlParameterSource("id", id);

        return namedJdbcTemplate.queryForObject(teamInfoSql, parameters, teamDtoMapper);
    }

    public Integer findHomeTeamIdById(int id) {
        String teamIdSql = "SELECT t.id FROM team t WHERE t.side_id = 2 AND t.score_board_id = :id";
        SqlParameterSource parameters = new MapSqlParameterSource("id", id);
        return namedJdbcTemplate.queryForObject(teamIdSql, parameters, Integer.class);
    }

    public void saveTeamByUser(int userId, int teamId) {
        String teamUpdateSql = "UPDATE team t SET user_id =:userId WHERE t.id = :teamId";
        SqlParameterSource parameters = new MapSqlParameterSource().addValue("userId", userId)
                .addValue("teamId", teamId);
        namedJdbcTemplate.update(teamUpdateSql, parameters);
    }

    public Integer countAllGame() {
        String sql = "SELECT COUNT(DISTINCT score_board_id) FROM team";
        return namedJdbcTemplate.getJdbcTemplate().queryForObject(sql, Integer.class);
    }


}
