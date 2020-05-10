import React, { useState } from 'react'
import styled from 'styled-components';
import ScoreInfo from './ScoreInfo';
import PlayerInfo from './PlayerInfo';
import InfoButtonsWrap from './InfoButtons';

const DetailInfoBackPanel = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: #00000080;
`;

const DetailInfo = () => {
    const [showPanel, setShowPanel] = useState(false);
    const [showScoreInfo, setShowScoreInfo] = useState(false);
    const [showPlayerInfo, setShowPlayerInfo] = useState(false);

    const handleClose = ({ target }) => {
        if (target.dataset.type !== 'contentPanel') return;
        setShowScoreInfo(false);
        setShowPlayerInfo(false);
        setTimeout(() => setShowPanel(false), 1200);
    };

    return (
        <>
            <InfoButtonsWrap {...{ setShowPanel, setShowScoreInfo, setShowPlayerInfo }} />
            {showPanel &&
                <DetailInfoBackPanel onClick={handleClose}>
                    <ScoreInfo {...{ showScoreInfo }} />
                    {/* <PlayerInfo {...{ showPlayerInfo }} /> */}
                </DetailInfoBackPanel>}
        </>
    )
}

export default DetailInfo
