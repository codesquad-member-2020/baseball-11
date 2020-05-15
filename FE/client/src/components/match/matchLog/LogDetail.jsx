import React, { memo } from 'react'
import styled from 'styled-components';

const LogDetailWrap = styled.div`
    display : flex;
    justify-content : space-around;
    margin-bottom : 5px;
    font-size : 20px;
    & .log-detail-id {
        background-color : #fff;
        width : 20px;
        height : 20px;
        color : #000;
        border-radius : 50%;
    }
    & .log-detail-status {
        width : 150px;
    }
    & .log-detail-b-count {
        color : #918d8d;
    }
`;

const LogDetail = ({ log }) => {
    const logDetails = log.reverse().map(data => {
        return (
            <LogDetailWrap key={data.id}>
                <div className='log-detail-id'>{data.id}</div>
                <div className='log-detail-status'>{data.status}</div>
                <div className='log-detail-b-count'>S{data.strike} B{data.ball}</div>
            </LogDetailWrap>
        )
    });

    return (
        <>
            {logDetails}
        </>
    )
}

export default memo(LogDetail);
