package com.codesquad.baseballgame.domain.team.controller;

import com.codesquad.baseballgame.domain.team.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class TeamController {

    private final TeamService teamService;

   @GetMapping("/teams")
    public ResponseEntity<?> teamList() {
       return new ResponseEntity<>(teamService.showTeamList(), HttpStatus.OK);
   }
}
