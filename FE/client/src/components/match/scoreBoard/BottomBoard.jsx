import React, { useContext } from 'react'
import styled from 'styled-components';
import { MatchContext } from '../../../store/MatchStore';

const BottomBoardWrap = styled.div`
    display : flex;
    height : 25%;
    font-size : 22px;
    & .ball-count {
        width : 64%;
        background-color : #000;
        display : flex;
        justify-content : space-around;
        align-items : center;
        & .b-count-text {
            margin-right : 3px;
        }
        & .b-count {
            width : 15px;
            height : 15px;
            display : inline-block;
            background-color : #5a5a5a;
            border-radius : 50%;
            margin-left : 1.5px;
            &.ball-count {
                background-color : #0f0;
            }
            &.strike-count {
                background-color : #ff0;
            }
            &.out-count {
                background-color : #f00;
            }
        }
    }
    & .pitches-count {
        width : 36%;
        background-color : #5a5a5a;
        display : flex;
        justify-content : center;
        align-items : center;
        & .p-count {
            margin-left : 10px;
        }
    }
`;

const BottomBoard = () => {
    const { ballCount, currentPlayer } = useContext(MatchContext);

    return (
        <BottomBoardWrap>
            <div className='ball-count'>
                <div>
                    <span className='b-count-text'>B</span>
                    <span className={`b-count ${ballCount.ball >= 1 && 'ball-count'}`} />
                    <span className={`b-count ${ballCount.ball >= 2 && 'ball-count'}`} />
                    <span className={`b-count ${ballCount.ball >= 3 && 'ball-count'}`} />
                </div>
                <div>
                    <span className='b-count-text'>S</span>
                    <span className={`b-count ${ballCount.strike >= 1 && 'strike-count'}`} />
                    <span className={`b-count ${ballCount.strike >= 2 && 'strike-count'}`} />
                </div>
                <div>
                    <span className='b-count-text'>O</span>
                    <span className={`b-count ${ballCount.out >= 1 && 'out-count'}`} />
                    <span className={`b-count ${ballCount.out >= 2 && 'out-count'}`} />
                </div>
            </div>
            <div className='pitches-count'>
                <div>⚾</div>
                <div className='p-count'>{currentPlayer.pitcher.pitchNumber}</div>
            </div>
        </BottomBoardWrap>
    )
}

export default BottomBoard
