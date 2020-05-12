import React from 'react'
import styled from 'styled-components';

const InfoButtonsWrap = styled.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    width: 250px;
    z-index: 10;
    & button {
        background-color: #000;
        color: #fff;
        outline: none;
        border: 1px solid #ccc;
        width: 100px;
        height: 30px;
        border-radius: 3px;
    }
`;

const InfoButtons = ({ showContent, setShowPanel, setShowContent }) => {
    const handleShowScoreInfo = (showItem) => {
        setShowPanel(showItem);
        setShowContent(showItem);
    }

    return (
        <InfoButtonsWrap>
            <button onClick={() => handleShowScoreInfo(Object.assign({ ...showContent }, { scoreInfo: true }))}>상세 점수</button>
            <button onClick={() => handleShowScoreInfo(Object.assign({ ...showContent }, { playerInfo: true }))}>선수 명단</button>
        </InfoButtonsWrap>
    )
}

export default InfoButtons
