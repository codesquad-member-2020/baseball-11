import React, { useContext } from 'react'
import styled from 'styled-components';
import { MatchContext } from '../../../store/MatchStore';
import TPlayer from './TPlayer';

const PlayerInfoWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000080;
    z-index: 10;
`;

const PlayerInfoBox = styled.div`
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 600px;
    border: 2px solid #fff;
    color: #fff;
    background-color: #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    animation-duration: 1.5s;
    animation-fill-mode: both;
    &.show-content {
        animation-name: show-playerInfo;
    }
    &.hide-content {
        animation-name: hide-playerInfo;
    }
    @keyframes show-playerInfo {
        0%  { top: -50%; }
        100% { top: 50%; }
    }
    @keyframes hide-playerInfo {
        0%  { top: 50%; }
        100% { top: -50%; }
    }
    & table {
        font-size: 24px;
        width: 350px;
        text-align: center;
        & thead {
            & tr {
                line-height: 50px;
                font-size: 30px;
                font-weight: 600;
                border-bottom: 1px solid #fff;
                &:last-child {
                font-weight: 300;
                    color: #918d8d;
                    font-size: 24px;
                }

            }
        }
        & tbody {
            & tr {
                border-bottom: 1px solid #fff;
                line-height: 40px;
                &:last-child {
                    font-weight: 600;
                    border-bottom: none;
                }
            }
        }
    }
`;

const CenterLine = styled.div`
    width: 1px;
    height: 500px;
    border-left: 1px solid #fff;
`;

const PlayerInfo = ({ showContent }) => {
    const { playerList } = useContext(MatchContext);
    const showClassName = showContent.playerInfo ? 'show-content' : 'hide-content';

    return (
        <PlayerInfoWrap data-type='contentPanel' data-content='playerInfo'>
            <PlayerInfoBox className={showClassName}>
                <TPlayer teamData={playerList.away} />
                <CenterLine />
                <TPlayer teamData={playerList.home} />
            </PlayerInfoBox>
        </PlayerInfoWrap>
    )
}

export default PlayerInfo
