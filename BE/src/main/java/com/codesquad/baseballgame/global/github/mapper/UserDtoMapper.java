package com.codesquad.baseballgame.global.github.mapper;

import com.codesquad.baseballgame.global.github.dto.UserDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDtoMapper implements RowMapper<UserDto> {
    @Override
    public UserDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        return UserDto.builder().
                userId(rs.getString("user_id")).build();
    }
}
