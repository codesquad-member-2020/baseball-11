import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import effectSound from '../../utils/effectSound';
import hitterES from '../../audios/hitterES.mp3';

const MainWrap = styled.div`
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
    background : url('/images/main-background.jpg') no-repeat;
    background-size : 100% 100%;
    filter: blur(5px);
    -webkit-filter: blur(5px);
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
                <Link to='/select'>
                    <button className='login-btn'>로그인</button>
                </Link>
                {/* <a href='https://github.com/login/oauth/authorize/?client_id=4946b46078dcaa5adfa6&scope=user'>
                    <button className='login-btn'>로그인</button>
                </a> */}
            </MainInner>
            <Background />
        </MainWrap>
    )
}

export default Main
