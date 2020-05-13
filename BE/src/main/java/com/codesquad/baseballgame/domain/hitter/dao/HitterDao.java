package com.codesquad.baseballgame.domain.hitter.dao;

import com.codesquad.baseballgame.domain.hitter.dto.HitterInfoDto;
import com.codesquad.baseballgame.domain.hitter.dto.HitterListDto;
import com.codesquad.baseballgame.domain.hitter.mapper.HitterListMapper;
import com.codesquad.baseballgame.domain.hitter.mapper.HitterMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class HitterDao {

    private final NamedParameterJdbcTemplate namedJdbcTemplate;
    private final HitterMapper hitterMapper = new HitterMapper();
    private final HitterListMapper hitterListMapper = new HitterListMapper();

    public HitterDao(DataSource dataSource) {
        this.namedJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public HitterInfoDto findHitterById(int teamId, int id) {
        String hitterInfoSql = "SELECT h.name, h.batting_order, h.batter_box, h.hit, h.out_count, h.avg " +
                "FROM hitter h " +
                "WHERE h.team_id = :teamId " +
                "AND h.batting_order = :id";
        SqlParameterSource parameters = new MapSqlParameterSource()
                .addValue("teamId", teamId).addValue("id", id);
        return namedJdbcTemplate.queryForObject(hitterInfoSql, parameters, hitterMapper);
    }

    public HitterListDto findTotalByTeamId(int teamId) {
        String awayTotalSql = "SELECT  t.name, SUM(h.batter_box) AS total_sum, SUM(h.hit) AS total_hit, " +
                "SUM(h.out_count) AS total_out " +
                "FROM hitter h " +
                "LEFT JOIN team t " +
                "ON t.id = h.team_id " +
                "WHERE h.team_id = :teamId";
        SqlParameterSource parameters = new MapSqlParameterSource("teamId", teamId);
        return namedJdbcTemplate.queryForObject(awayTotalSql, parameters, hitterListMapper);
    }

    public Integer countHitter() {
        String sql = "SELECT COUNT(DISTINCT h.batting_order) FROM hitter h";
        return namedJdbcTemplate.getJdbcTemplate().queryForObject(sql, Integer.class);
    }
}
