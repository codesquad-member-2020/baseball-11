package com.codesquad.baseballgame.domain.scoreboard.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScoreBoardController {

    @GetMapping("games/{id}/scoreboard")
    public void showScoreBoard(@PathVariable int id) {


    }
}
