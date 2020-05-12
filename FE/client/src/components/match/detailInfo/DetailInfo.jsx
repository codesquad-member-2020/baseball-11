import React, { useState, useEffect } from 'react'
import ScoreInfo from './ScoreInfo';
import PlayerInfo from './PlayerInfo';
import InfoButtonsWrap from './InfoButtons';

const DetailInfo = () => {
    const defaultState = { scoreInfo: false, playerInfo: false };
    const [showPanel, setShowPanel] = useState(defaultState);
    const [showContent, setShowContent] = useState(defaultState);
    let setTimeoutPanel;

    const handleClose = ({ target }) => {
        if (target.dataset.type !== 'contentPanel') return;
        const _showContent = { ...showContent };
        _showContent[target.dataset.content] = false;
        setShowContent(Object.assign({ ...showContent }, { ..._showContent }));
        setTimeoutPanel = setTimeout(() => setShowPanel(Object.assign({ ...showPanel }, { ..._showContent })), 1200);
    };

    useEffect(() => {
        return () => {
            clearTimeout(setTimeoutPanel);
            setShowPanel(defaultState);
        }
    }, []);

    return (
        <>
            <InfoButtonsWrap {...{ showContent, setShowPanel, setShowContent }} />
            <div onClick={handleClose}>
                {showPanel.scoreInfo && <ScoreInfo {...{ showContent }} />}
                {showPanel.playerInfo && <PlayerInfo {...{ showContent }} />}
            </div>
        </>
    )
}

export default DetailInfo
