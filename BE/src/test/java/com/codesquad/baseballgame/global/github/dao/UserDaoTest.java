package com.codesquad.baseballgame.global.github.dao;

import com.codesquad.baseballgame.global.github.dto.UserDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserDaoTest {

    @Autowired
    private UserDao userDao;

    @Test
    public void 유저추가() {
        UserDto userDto = new UserDto();

        userDao.saveUserDao(userDto);
    }

    @Test
    public void 유저찾기() {
        UserDto userDto = userDao.findUserDtoById("abc");
        System.out.println(userDto);
    }
}
