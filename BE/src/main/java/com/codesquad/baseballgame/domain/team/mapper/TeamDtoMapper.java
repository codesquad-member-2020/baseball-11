package com.codesquad.baseballgame.domain.team.mapper;

import com.codesquad.baseballgame.domain.team.dto.TeamDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TeamDtoMapper implements RowMapper<TeamDto> {

    public TeamDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        return TeamDto.builder()
                .user(rs.getString("user_id"))
                .name(rs.getString("name"))
                .build();
    }
}
