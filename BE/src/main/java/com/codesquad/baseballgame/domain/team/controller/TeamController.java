package com.codesquad.baseballgame.domain.team.controller;

import com.codesquad.baseballgame.domain.team.dto.TeamDataDto;
import com.codesquad.baseballgame.domain.team.service.TeamService;
import com.codesquad.baseballgame.global.utils.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequiredArgsConstructor
public class TeamController {

    private final TeamService teamService;

   @GetMapping("/teams")
    public ResponseEntity<TeamDataDto> teamList() {
       return new ResponseEntity<>(teamService.showTeamList(), HttpStatus.OK);
   }

//    @RequestMapping(value="/teams/{id}" , method = {RequestMethod.GET, RequestMethod.POST})
//    public ResponseEntity<String> selectTeam(@PathVariable int id, HttpServletRequest request) {
//       String userCookie = (String) request.getAttribute("userId");
//       String user = JwtUtils.jwtParsing(userCookie);
//       teamService.selectTeam(id, user);
//       return new ResponseEntity<>("OK", HttpStatus.OK);
//   }
}
