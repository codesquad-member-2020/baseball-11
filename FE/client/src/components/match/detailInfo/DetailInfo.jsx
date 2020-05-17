import React, { useState, useEffect, useRef } from 'react'
import ScoreInfo from './ScoreInfo';
import PlayerInfo from './PlayerInfo';
import InfoButtonsWrap from './InfoButtons';

const DetailInfo = () => {
    const defaultState = { scoreInfo: false, playerInfo: false };
    const [showPanel, setShowPanel] = useState(defaultState);
    const [showContent, setShowContent] = useState(defaultState);
    const timeoutId = useRef();

    const handleClose = ({ target }) => {
        if (target.dataset.type !== 'contentPanel') return;
        const _showContent = { ...showContent };
        _showContent[target.dataset.content] = false;
        setShowContent({ ...showContent, ..._showContent });
        timeoutId.current = setTimeout(() => setShowPanel({ ...showPanel, ..._showContent }), 1200);
    };

    useEffect(() => {
        return () => {
            setShowPanel({ ...showPanel, ...defaultState });
            return clearTimeout(timeoutId.current);
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
