DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS team;
DROP TABLE IF EXISTS hitter;
DROP TABLE IF EXISTS pitcher;
DROP TABLE IF EXISTS ball_count;
DROP TABLE IF EXISTS score_board;

CREATE TABLE user
(
    id      INT PRIMARY KEY auto_increment,
    user_id VARCHAR(128)
);

CREATE TABLE team
(
    id             INT PRIMARY KEY auto_increment,
    name           VARCHAR(16),
    stadium        VARCHAR(8),
    game_number    INTEGER,
    user_id        INTEGER REFERENCES user (id),
    score_board_id INTEGER REFERENCES score_board (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE score_board
(
    id            INT PRIMARY KEY auto_increment,
    user_id       INTEGER REFERENCES user (id),
    chance        TINYINT,
    score_top     INTEGER,
    score_bottom  INTEGER,
    inning_top    INTEGER,
    inning_bottom INTEGER
);

CREATE TABLE hitter
(
    id            INT PRIMARY KEY auto_increment,
    name          VARCHAR(16),
    batting_order INTEGER,
    hit           INTEGER,
    out_count     INTEGER,
    avg           DOUBLE,
    status        VARCHAR(16),
    team_id       INTEGER REFERENCES team (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE pitcher
(
    id            INT PRIMARY KEY auto_increment,
    name          VARCHAR(16),
    jersey_number VARCHAR(16),
    team_id       INTEGER REFERENCES team (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE ball_count
(
    id        INT PRIMARY KEY auto_increment,
    strike    INTEGER,
    ball      INTEGER,
    out_count INTEGER,
    hitter_id   INTEGER REFERENCES hitter (id) ON UPDATE CASCADE ON DELETE CASCADE
);
