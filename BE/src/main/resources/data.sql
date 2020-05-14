INSERT INTO score_board (game_number, chance, inning, away_total_score, home_total_score)
VALUES (1, 0, 1, 0, 0);
INSERT INTO score_board (game_number, chance, inning, away_total_score, home_total_score)
VALUES (2, 0, 1, 0, 0);
INSERT INTO score_board (game_number, chance, inning, away_total_score, home_total_score)
VALUES (3, 0, 1, 0, 0);
INSERT INTO score_board (game_number, chance, inning, away_total_score, home_total_score)
VALUES (4, 0, 1, 0 ,0);
INSERT INTO score_board (game_number, chance, inning, away_total_score, home_total_score)
VALUES (5, 0, 1, 0, 0);

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

INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('정진기', 1, 0, 0, 0, 0, 3);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('고종욱', 2, 0, 0, 0, 0, 3);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('최정', 3, 0, 0, 0, 0, 3);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('로맥', 4, 0, 0, 0, 0, 3);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('한동민', 5, 0, 0, 0, 0, 3);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('정의윤', 6, 0, 0, 0, 0, 3);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('이현석', 7, 0, 0, 0, 0, 3);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('김창평', 8, 0, 0, 0, 0, 3);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('정현', 9, 0, 0, 0, 0, 3);

INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('이천웅', 1, 0, 0, 0, 0, 4);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('김현수', 2, 0, 0, 0, 0, 4);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('채은성', 3, 0, 0, 0, 0, 4);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('라모스', 4, 0, 0, 0, 0, 4);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('김민성', 5, 0, 0, 0, 0, 4);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('박용택', 6, 0, 0, 0, 0, 4);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('정근우', 7, 0, 0, 0, 0, 4);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('유강남', 8, 0, 0, 0, 0, 4);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('오지환', 9, 0, 0, 0, 0, 4);

INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('박건우', 1, 0, 0, 0, 0, 5);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('페르난데스', 2, 0, 0, 0, 0, 5);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('오재일', 3, 0, 0, 0, 0, 5);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('김재환', 4, 0, 0, 0, 0, 5);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('오재원', 5, 0, 0, 0, 0, 5);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('김재호', 6, 0, 0, 0, 0, 5);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('박세혁', 7, 0, 0, 0, 0, 5);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('허경민', 8, 0, 0, 0, 0, 5);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('정수빈', 9, 0, 0, 0, 0, 5);

INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('서건창', 1, 0, 0, 0, 0, 6);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('김하성', 2, 0, 0, 0, 0, 6);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('이정후', 3, 0, 0, 0, 0, 6);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('박병호', 4, 0, 0, 0, 0, 6);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('박동원', 5, 0, 0, 0, 0, 6);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('임병욱', 6, 0, 0, 0, 0, 6);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('모터', 7, 0, 0, 0, 0, 6);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('김혜성', 8, 0, 0, 0, 0, 6);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('박준태', 9, 0, 0, 0, 0, 6);

INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('정진호', 1, 0, 0, 0, 0, 7);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('하주석', 2, 0, 0, 0, 0, 7);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('송광민', 3, 0, 0, 0, 0, 7);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('호잉', 4, 0, 0, 0, 0, 7);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('김태균', 5, 0, 0, 0, 0, 7);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('이성열', 6, 0, 0, 0, 0, 7);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('오선진', 7, 0, 0, 0, 0, 7);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('최재훈', 8, 0, 0, 0, 0, 7);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('이용규', 9, 0, 0, 0, 0, 7);

INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('박민우', 1, 0, 0, 0, 0, 8);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('이명기', 2, 0, 0, 0, 0, 8);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('나성범', 3, 0, 0, 0, 0, 8);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('양의지', 4, 0, 0, 0, 0, 8);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('박석민', 5, 0, 0, 0, 0, 8);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('알테어', 6, 0, 0, 0, 0, 8);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('노진혁', 7, 0, 0, 0, 0, 8);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('이원재', 8, 0, 0, 0, 0, 8);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('김성욱', 9, 0, 0, 0, 0, 8);

INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('심우준', 1, 0, 0, 0, 0, 9);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('김민혁', 2, 0, 0, 0, 0, 9);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('강백호', 3, 0, 0, 0, 0, 9);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('유한준', 4, 0, 0, 0, 0, 9);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('로하스', 5, 0, 0, 0, 0, 9);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('황재균', 6, 0, 0, 0, 0, 9);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('박경수', 7, 0, 0, 0, 0, 9);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('장성우', 8, 0, 0, 0, 0, 9);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('배병옥', 9, 0, 0, 0, 0, 9);

INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('최원준', 1, 0, 0, 0, 0, 10);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('김선빈', 2, 0, 0, 0, 0, 10);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('터커', 3, 0, 0, 0, 0, 10);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('최형우', 4, 0, 0, 0, 0, 10);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('나지완', 5, 0, 0, 0, 0, 10);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('유민상', 6, 0, 0, 0, 0, 10);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('백용환', 7, 0, 0, 0, 0, 10);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('황윤호', 8, 0, 0, 0, 0, 10);
INSERT INTO hitter (name, batting_order, batter_box, hit, out_count, avg, team_id)
VALUES ('박찬호', 9, 0, 0, 0, 0, 10);
