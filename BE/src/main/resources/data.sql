INSERT INTO score_board (game_number, chance, inning, score, away_total_score, home_total_score)
VALUES (1, 0, 1, 0, 0, 0);
INSERT INTO score_board (game_number, chance, inning, score, away_total_score, home_total_score)
VALUES (2, 0, 1, 0, 0, 0);
INSERT INTO score_board (game_number, chance, inning, score, away_total_score, home_total_score)
VALUES (3, 0, 1, 0, 0, 0);
INSERT INTO score_board (game_number, chance, inning, score, away_total_score, home_total_score)
VALUES (4, 0, 1, 0, 0 ,0);
INSERT INTO score_board (game_number, chance, inning, score, away_total_score, home_total_score)
VALUES (5, 0, 1, 0, 0, 0);

INSERT INTO side (side)
VALUES ('away');
INSERT INTO side (side)
VALUES ('home');

INSERT INTO team (name, side_id, score_board_id)
VALUES ('삼성', 1, 1);
INSERT INTO team (name, side_id, score_board_id)
VALUES ('롯데', 2, 1);

INSERT INTO team (name, side_id, score_board_id)
VALUES ('SK', 1, 2);
INSERT INTO team (name, side_id, score_board_id)
VALUES ('LG', 2, 2);

INSERT INTO team (name, side_id, score_board_id)
VALUES ('두산', 1, 3);
INSERT INTO team (name, side_id, score_board_id)
VALUES ('키움', 2, 3);

INSERT INTO team (name, side_id, score_board_id)
VALUES ('한화', 1, 4);
INSERT INTO team (name, side_id, score_board_id)
VALUES ('NC', 2, 4);

INSERT INTO team (name, side_id, score_board_id)
VALUES ('KT', 1, 5);
INSERT INTO team (name, side_id, score_board_id)
VALUES ('기아', 2, 5);
