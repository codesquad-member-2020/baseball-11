package com.codesquad.baseballgame.domain.hitter.mapper;

import com.codesquad.baseballgame.domain.hitter.dto.HitterListDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class HitterListMapper implements RowMapper<HitterListDto> {

    @Override
    public HitterListDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        return HitterListDto.builder()
                .teamName(rs.getString("name"))
                .totalsBatterBox(rs.getInt("total_sum"))
                .totalsHit(rs.getInt("total_hit"))
                .totalsOut(rs.getInt("total_out"))
                .build();
    }
}
