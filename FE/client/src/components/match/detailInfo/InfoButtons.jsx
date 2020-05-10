import React from 'react'
import styled from 'styled-components';

const InfoButtonsWrap = styled.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
`;

const InfoButtons = ({ setShowPanel, setShowScoreInfo, setShowPlayerInfo }) => {
    const handleShowScoreInfo = (setCallBack) => {
        setShowPanel(true);
        setCallBack(true);
    }

    return (
        <InfoButtonsWrap>
            <button onClick={() => handleShowScoreInfo(setShowScoreInfo)}>상세 점수</button>
            <button onClick={() => handleShowScoreInfo(setShowPlayerInfo)}>선수 명단</button>
        </InfoButtonsWrap>
    )
}

export default InfoButtons
