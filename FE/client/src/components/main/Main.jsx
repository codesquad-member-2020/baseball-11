import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MainWrap = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    background-color : #00000099;
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
            <Title>신나는 야구 게임 ~.~</Title>
            <NavLink to='/select'>
                <button style={{ width: '100px', height: '50px' }}>로그인</button>
            </NavLink>
        </MainWrap>
    )
}

export default Main
