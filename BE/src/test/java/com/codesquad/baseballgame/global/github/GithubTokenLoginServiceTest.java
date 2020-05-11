package com.codesquad.baseballgame.global.github;

import com.codesquad.baseballgame.global.config.GithubOauthProperty;
import com.codesquad.baseballgame.global.utils.JwtUtils;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

@SpringBootTest
class GithubTokenLoginServiceTest {

    @Autowired
    private GithubOauthProperty config;

    @Test
    public void jwt() {
        Date exDate = new Date(System.currentTimeMillis() + 86400000);

        String jws = Jwts.builder()
                .signWith(SignatureAlgorithm.HS256, "secret")
                .claim("user", "joe")
                .setExpiration(exDate)
                .compact();
        System.out.println(jws);
    }

    @Test
    public void 프로퍼티출력() {
        String jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJrc2VzMTAxMCJ9.NvpIQaVX8rmlRhfOWe2hmKAATFOgX4bnWGVQf1iQcYQ";
        String parse = JwtUtils.jwtParsing(jwt);
        System.out.println(parse);
    }
}
