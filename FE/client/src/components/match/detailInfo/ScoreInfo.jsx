import React, { useContext } from 'react'
import styled from 'styled-components';
import { MatchContext } from '../../../store/MatchStore';
import TScore from './TScore';

const ScoreInfoWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000080;
    z-index: 10;
`;

const ScoreInfoBox = styled.div`
    position: absolute;
    top: -25%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 250px;
    border: 2px solid #fff;
    color: #fff;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-duration: 1.5s;
    animation-fill-mode: both;
    &.show-content {
        animation-name: show-scoreInfo;
    }
    &.hide-content {
        animation-name: hide-scoreInfo;
    }
    @keyframes show-scoreInfo {
        0%  { top: -25%; }
        100% { top: 25%; }
    }
    @keyframes hide-scoreInfo {
        0%  { top: 25%; }
        100% { top: -25%; }
    }
    & table {
        text-align: center;
        width: 90%;
        & thead {
            font-size: 30px;
            border-bottom: 1px solid #fff;
            & tr {
                line-height: 50px;
                & th {
                }
            }
        }
        & tbody {
            font-size: 30px;
            & tr {
                line-height: 70px;
                padding-top: 10px;
                &:first-child {
                    border-bottom: 1px solid #fff;
                }
                & td {
                    &:last-child {
                        color: #f00;
                    }
                }
            }
        }
    }
`;

const ScoreInfo = ({ showContent }) => {
    const { detailScore } = useContext(MatchContext);
    const showClassName = showContent.scoreInfo ? 'show-content' : 'hide-content';

    return (
        <ScoreInfoWrap data-type='contentPanel' data-content='scoreInfo'>
            <ScoreInfoBox className={showClassName}>
                <table>
                    <colgroup>
                        <col width='30%' />
                    </colgroup>
                    <thead>
                        <tr>
                            <th></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>R</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TScore scoreData={detailScore.away} />
                        <TScore scoreData={detailScore.home} />
                    </tbody>
                </table>
            </ScoreInfoBox>
        </ScoreInfoWrap>
    )
}

export default ScoreInfo
