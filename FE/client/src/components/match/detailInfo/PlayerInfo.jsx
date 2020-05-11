import React from 'react'
import styled from 'styled-components';

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
    const showClassName = showContent.playerInfo ? 'show-content' : 'hide-content';

    return (
        <PlayerInfoWrap data-type='contentPanel' data-content='playerInfo'>
            <PlayerInfoBox className={showClassName}>
                <table>
                    <thead>
                        <tr>
                            <th colSpan='5'>레알마드리드</th>
                        </tr>
                        <tr>
                            <th>타자</th>
                            <th>타석</th>
                            <th>안타</th>
                            <th>아웃</th>
                            <th>평균</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>김광진</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>이동규</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>김진수</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>박영권</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>추신수</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>이용대</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>류현진</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>최동수</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>한양범</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>Totals</td>
                            <td>9</td>
                            <td>4</td>
                            <td>5</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <CenterLine />
                <table>
                    <thead>
                        <tr>
                            <th colSpan='5'>맨유</th>
                        </tr>
                        <tr>
                            <th>타자</th>
                            <th>타석</th>
                            <th>안타</th>
                            <th>아웃</th>
                            <th>평균</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>김광진</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>이동규</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>김진수</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>박영권</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>추신수</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>이용대</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>류현진</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>최동수</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>한양범</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1.000</td>
                        </tr>
                        <tr>
                            <td>Totals</td>
                            <td>9</td>
                            <td>4</td>
                            <td>5</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </PlayerInfoBox>
        </PlayerInfoWrap>
    )
}

export default PlayerInfo
