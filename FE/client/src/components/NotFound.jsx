import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
    width : 100%;
    height : 100%;
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
    setTimeout(() => setWait(false), 5000);

    return (
        <Wrap>
            {wait ? <Title>존재하지 않는 페이지 입니다. 메인 페이지로 이동 합니다.</Title> : <Redirect to='/' />}
        </Wrap>
    )
}

export default NotFound
