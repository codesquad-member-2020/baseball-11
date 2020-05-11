package com.codesquad.baseballgame.global.github.dao;

import com.codesquad.baseballgame.global.github.dto.UserDto;
import com.codesquad.baseballgame.global.github.mapper.UserDtoMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.jdbc.core.simple.SimpleJdbcInsertOperations;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

@Repository
public class UserDao {

    private final NamedParameterJdbcTemplate namedJdbcTemplate;
    private final UserDtoMapper userDtoMapper = new UserDtoMapper();
    private final SimpleJdbcInsertOperations insertion;

    public UserDao(DataSource dataSource) {
        this.namedJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
        this.insertion = new SimpleJdbcInsert(dataSource).withTableName("user");
    }

    public UserDto findUserDtoById(String user_id) {
        SqlParameterSource nameParameters = new MapSqlParameterSource().addValue("user_id", user_id);
        String userIdSql = "SELECT user_id FROM user WHERE user_id = :user_id";
        return namedJdbcTemplate.queryForObject(userIdSql, nameParameters, userDtoMapper);
    }

    public void saveUserDao(UserDto userDto) {
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("user_id", userDto.getUserId());
        insertion.execute(parameters);
    }
}
