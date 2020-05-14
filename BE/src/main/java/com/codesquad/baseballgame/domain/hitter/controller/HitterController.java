package com.codesquad.baseballgame.domain.hitter.controller;

import com.codesquad.baseballgame.domain.hitter.dto.HitterTeamDto;
import com.codesquad.baseballgame.domain.hitter.service.HitterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/games/{gameId}")
public class HitterController {

    private final HitterService hitterService;

    @GetMapping("/players")
    public ResponseEntity<HitterTeamDto> showPlayerList(@PathVariable int gameId) {
        return new ResponseEntity<>(hitterService.showHitterStatus(gameId),HttpStatus.OK);
    }
}
