package com.codesquad.baseballgame.domain.hitter.mapper;

import com.codesquad.baseballgame.domain.hitter.dto.HitterInfoDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class HitterMapper implements RowMapper<HitterInfoDto> {

    @Override
    public HitterInfoDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        return HitterInfoDto.builder()
                .battingOrder(rs.getInt("batting_order"))
                .name(rs.getString("name"))
                .batterBox(rs.getInt("batter_box"))
                .hit(rs.getInt("hit"))
                .out(rs.getInt("out_count"))
                .average(rs.getDouble("avg"))
                .build();
    }
}
