import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Howl, Howler } from 'howler';
import sportsBGM from '../../audios/sports.mp3';

import { teamData } from '../../mock/mock';

const SelectWrap = styled.div`
    width : 100%;
    height : 100%;
    background : url('/images/ground.jpg') no-repeat;
    background-size : 100% 100%;
`;

const SelectInner = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    background-color : #00000099;
`;

const Title = styled.div`
    font-size : 50px;
    font-weight : 600;
    margin-bottom : 80px;
    perspective: 400px;
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   
    -webkit-background-clip: text;
    color: transparent;
    animation-name: bingle;
    animation-duration: ${props => (props.duration)};
    animation-timing-function:linear;
    animation-iteration-count: infinite;
    @keyframes bingle{
        to{
            transform: rotate3d(0,1,0,360deg);
        }
    }
    &:hover {
        animation-name: none;
        transform : scale(1.5);
    }
`;

const StateText = styled.div`
    color : #fff;
    font-size : 20px;
    font-weight : 600;
    margin-bottom : 20px;
`;

const Game = styled.div`
    position : relative;
    width : 100%;
    height : 80px;
    background-color : #ffffff80;
    border-radius : 10px;
    margin-bottom : 10px;
    text-align : center;
    font-weight : 600;
    display : flex;
    justify-content : space-around;
    align-items : center;
    & .team-name {
        font-size : 22px;
        width : 50%;
        cursor: pointer;
        &:hover {
            color : #f00;
        }
    }
    & .game-id {
        position : absolute;
        top : 10%;
        left : 50%;
        transform : translateX(-50%);
        font-size : 15px;
    }
    & .vs {
        position : absolute;
        top : 50%;
        left : 50%;
        transform : translateX(-50%);
        font-size : 18px;
    }
`;

const SelectBox = styled.div`
    width : 400px;
    height : 300px;
    overflow : auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const audio = { sound: sportsBGM };

const Select = () => {
    Howler.volume(1.0);
    let sound;
    const soundStop = () => sound.stop();
    const soundPlay = (src) => {
        sound = new Howl({ src });
        sound.play();
    }

    useEffect(() => {
        return soundStop;
    })

    const gameList = teamData.map(game => {
        return (
            <Game key={game.id}>
                <div className='team-name away'>
                    <span>{game.away.teamName}</span>
                </div>
                <span className='game-id'>GAME {game.id}</span>
                <span className='vs'>VS</span>
                <div className='team-name home'>
                    <span>{game.home.teamName}</span>
                </div>
            </Game>
        )
    });

    return (
        <SelectWrap>
            <SelectInner>
                <Title duration={'6s'}>행복한 하루 되세요</Title>
                <Title duration={'3s'}>게임 선택 ^.^</Title>
                <StateText>참가할 게임을 선택하세요!</StateText>
                <SelectBox>
                    {gameList}
                </SelectBox>
                {soundPlay(audio.sound)}
            </SelectInner>
        </SelectWrap>
    )
}

export default Select
