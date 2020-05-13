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

INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('박해민', 1, 0, 0, 0, 0, 1);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('김동엽', 2, 0, 0, 0, 0, 1);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('김상수', 3, 0, 0, 0, 0, 1);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('살라디노', 4, 0, 0, 0, 0, 1);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('이원석', 5, 0, 0, 0, 0, 1);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('김헌곤', 6, 0, 0, 0, 0, 1);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('강민호', 7, 0, 0, 0, 0, 1);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('이성규', 8, 0, 0, 0, 0, 1);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('김성표', 9, 0, 0, 0, 0, 1);

INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('민병헌', 1, 0, 0, 0, 0, 2);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('전준우', 2, 0, 0, 0, 0, 2);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('손아섭', 3, 0, 0, 0, 0, 2);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('이대호', 4, 0, 0, 0, 0, 2);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('안치홍', 5, 0, 0, 0, 0, 2);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('정훈', 6, 0, 0, 0, 0, 2);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('마차도', 7, 0, 0, 0, 0, 2);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('한동희', 8, 0, 0, 0, 0, 2);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('정보근', 9, 0, 0, 0, 0, 2);
