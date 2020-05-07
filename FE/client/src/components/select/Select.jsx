import React, { useEffect } from 'react'
import { Howl, Howler } from 'howler';
import styled from 'styled-components';
import Games from './Games';
import sportsBGM from '../../audios/sports.mp3';

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

const SelectBox = styled.div`
    width : 400px;
    height : 300px;
    overflow : auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Select = () => {
    Howler.volume(1.0);
    let sound;
    const soundStop = () => sound.stop();
    const soundPlay = (src) => {
        sound = new Howl({ src });
        sound.play();
    }
    soundPlay(sportsBGM);
    useEffect(() => soundStop);

    return (
        <SelectWrap>
            <SelectInner>
                <Title duration={'6s'}>행복한 하루 되세요</Title>
                <Title duration={'3s'}>게임 선택 ^.^</Title>
                <StateText>참가할 게임을 선택하세요!</StateText>
                <SelectBox>
                    <Games />
                </SelectBox>
            </SelectInner>
        </SelectWrap>
    )
}

export default Select
