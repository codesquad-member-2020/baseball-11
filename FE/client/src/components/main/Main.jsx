import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import effectSound from '../../utils/effectSound';
import hitterES from '../../audios/hitterES.mp3';

const MainWrap = styled.div`
    width : 100%;
    height : 100%;
    background : url('/images/main-background.jpg') no-repeat;
    background-size : 100% 100%;
`;

const MainInner = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    background-color : #00000099;
    & .login-btn {
        width: 100px;
        height: 50px;
    }
`;

const Title = styled.div`
    font-size : 100px;
    font-weight : 600;
    margin-bottom : 80px;
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   
    -webkit-background-clip: text;
    color: transparent;
`;

const Main = () => {
    const hitterSound = effectSound(hitterES);
    hitterSound.play();

    return (
        <MainWrap>
            <MainInner>
                <Title>신나는 야구 게임 ~.~</Title>
                <NavLink to='/select'>
                    <button className='login-btn'>로그인</button>
                </NavLink>
            </MainInner>
        </MainWrap>
    )
}

export default Main
