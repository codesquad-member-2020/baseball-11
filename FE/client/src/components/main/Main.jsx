import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
    color : #fff;
    font-size : 80px;
    font-weight : 600;
    margin-bottom : 80px;
`;

const Main = () => {
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
