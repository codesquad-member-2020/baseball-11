package com.codesquad.baseballgame.domain.team.controller;

import com.codesquad.baseballgame.domain.team.dto.TeamDataDto;
import com.codesquad.baseballgame.domain.team.service.TeamService;
import com.codesquad.baseballgame.global.utils.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

@RestController
@RequiredArgsConstructor
@RequestMapping("/teams")
public class TeamController {

    private final TeamService teamService;

    @GetMapping("")
    public ResponseEntity<TeamDataDto> teamList() {
        return new ResponseEntity<>(teamService.showTeamList(), HttpStatus.OK);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Boolean> selectTeam(@PathVariable int id, HttpServletRequest request) {
        Cookie userCookie = request.getCookies()[0];
        String user = JwtUtils.jwtParsing(userCookie.getValue());
        teamService.selectTeam(id, user);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
