DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS team;
DROP TABLE IF EXISTS side;
DROP TABLE IF EXISTS score_board;
DROP TABLE IF EXISTS hitter;
DROP TABLE IF EXISTS pitcher;
DROP TABLE IF EXISTS pitch;
DROP TABLE IF EXISTS ball_count;

CREATE TABLE user
(
    id      INT PRIMARY KEY AUTO_INCREMENT,
    user_id VARCHAR(128) UNIQUE
);

CREATE TABLE team
(
    id             INT PRIMARY KEY AUTO_INCREMENT,
    name           VARCHAR(16) NOT NULL,
    side_id        INT REFERENCES side (id) ON UPDATE CASCADE ON DELETE CASCADE,
    user_id        INT REFERENCES user (id) ON UPDATE CASCADE ON DELETE CASCADE,
    score_board_id INT REFERENCES score_board (game_number) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE side
(
    id   INT PRIMARY KEY AUTO_INCREMENT,
    side VARCHAR(16)
);

CREATE TABLE score_board
(
    id               INT PRIMARY KEY AUTO_INCREMENT,
    game_number      INT,
    user_id          INT REFERENCES user (id),
    side_id          INT REFERENCES side (id),
    chance           TINYINT,
    inning           INT,
    away_total_score INT,
    home_total_score INT
);

CREATE TABLE hitter
(
    id            INT PRIMARY KEY AUTO_INCREMENT,
    name          VARCHAR(16),
    batting_order INT,
    batter_box    INT,
    hit           INT,
    out_count     INT,
    avg           DOUBLE,
    team_id       INTEGER REFERENCES team (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE pitcher
(
    id      INT PRIMARY KEY AUTO_INCREMENT,
    name    VARCHAR(16),
    team_id INT REFERENCES team (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE pitch
(
    id           INT PRIMARY KEY AUTO_INCREMENT,
    pitcher_id   INT REFERENCES pitcher (id) ON UPDATE CASCADE ON DELETE CASCADE,
    hitter_id    INT REFERENCES hitter (id) ON UPDATE CASCADE ON DELETE CASCADE,
    pitch_status VARCHAR(64)
);

CREATE TABLE ball_count
(
    id        INT PRIMARY KEY auto_increment,
    strike    INT,
    ball      INT,
    out_count INT,
    hitter_id INT REFERENCES hitter (id) ON UPDATE CASCADE ON DELETE CASCADE
);
