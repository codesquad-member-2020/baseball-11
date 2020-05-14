import React, { useState } from 'react'
import useSound from '../../hooks/useSound';
import useFetch from '../../hooks/useFetch';
import URL from '../../constants/url';
import styled from 'styled-components';
import Games from './Games';
import SelectBGM from '../../audios/SelectBGM.mp3';
import loading from '../../assets/loading.svg';

const SelectWrap = styled.div`
    width : 100%;
    height : 100%;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    width : 100%;
    height : 100%;
    background : url('/images/ground.jpg') no-repeat;
    background-size : 100% 100%;
    filter: blur(5px);
    -webkit-filter: blur(5px);
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
    font-size : 70px;
    font-weight : 600;
    margin-bottom : 80px;
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   
    -webkit-background-clip: text;
    color: transparent;
    animation-name: bingle;
    animation-duration: 3s;
    animation-timing-function:linear;
    animation-iteration-count: infinite;
    @keyframes bingle{
        to { transform: rotate3d(0,1,0,360deg) }
    }
    &:hover {
        animation-name: none;
        transform : scale(1.5);
    }
`;

const StateText = styled.div`
    color : #fff;
    position: relative;
    top: -10px;
    font-size : 20px;
    font-weight : 600;
    margin-bottom : 20px;
    z-index: 110;
`;

const SelectBox = styled.div`
    width : 400px;
    height : 300px;
    overflow : auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const LoadingWarp = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000099;
    z-index: 100;
`;

const Select = () => {
    const [gameData, setGameData] = useState(null);
    const [ready, setReady] = useState(false);
    const [stateText, setStateText] = useState('참가할 게임을 선택하세요!');
    const { BASE, GAMES } = URL;
    useFetch(setGameData, BASE + GAMES);
    useSound(SelectBGM, 1.0, 10000);

    return (
        <SelectWrap>
            <SelectInner>
                {ready && <LoadingWarp><img src={loading} alt='loading' /></LoadingWarp>}
                <Title>게임 선택 ^.^</Title>
                <StateText>{stateText}</StateText>
                <SelectBox>
                    {gameData && <Games {...{ gameData, setReady, setStateText }} />}
                </SelectBox>
            </SelectInner>
            <Background />
        </SelectWrap>
    )
}

export default Select
