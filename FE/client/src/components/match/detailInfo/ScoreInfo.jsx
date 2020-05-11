import React from 'react'
import styled from 'styled-components';

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
    top: -20%;
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
        animation-name: show-content;
    }
    &.hide-content {
        animation-name: hide-content;
    }
    @keyframes show-content {
        0%  { top: -20%; }
        100% { top: 25%; }
    }
    @keyframes hide-content {
        0%  { top: 25%; }
        100% { top: -20%; }
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
                        <tr>
                            <td>레알마드리드</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>맨유</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </ScoreInfoBox>
        </ScoreInfoWrap>
    )
}

export default ScoreInfo
