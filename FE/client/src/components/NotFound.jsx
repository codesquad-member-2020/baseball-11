import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundWrap = styled.div`
    width : 100%;
    height : 100%;
    background : url('/images/bonobono.jpg') no-repeat;
    background-size : 100% 100%;
`;

const NotFoundInner = styled.div`
    width : 100%;
    height : 100%;
    background-color : #00000099;
    display : flex;
    align-items : center;
    justify-content : center;
`;

const Title = styled.div`
    font-size : 55px;
    font-weight : 600;
    margin-bottom : 80px;
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   
    -webkit-background-clip: text;
    color: transparent;
`;

const NotFound = () => {
    const [wait, setWait] = useState(true);
    setTimeout(() => setWait(false), 4000);

    return (
        <NotFoundWrap>
            <NotFoundInner>
                {wait ? <Title>존재하지 않는 페이지 입니다. 메인 페이지로 이동 합니다.</Title> : <Redirect to='/' />}
            </NotFoundInner>
        </NotFoundWrap>
    )
}

export default NotFound
