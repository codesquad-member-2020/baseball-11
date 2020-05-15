import React, { useContext } from 'react'
import styled from 'styled-components';
import LogDetail from './LogDetail';
import { MatchContext } from '../../../store/MatchStore';

const MatchLogWrap = styled.div`
    position : absolute;
    bottom : 5px;
    right : 5px;
    width : 300px;
    height : 80%;
    background-color : #00000080;
    color : #fff;
    outline : 1px solid #5a5a5a;
    font-size : 22px;
    text-align : center;
    display : flex;
    flex-direction : column;
    align-items : center;
    overflow : auto;
    z-index : 1;
    &::-webkit-scrollbar {
        display: none;
    }
    & .log-wrap {
        width : 90%;
        height : auto;
        margin : 20px;
        margin-bottom : 40px;
        & .log-hitter {
            margin-bottom : 10px;
            color: #ff8585;
            &.prev-hitter {
            color: #adadff;
            }
        }
        & .log-result {
            margin-bottom : 15px;
            color: #8b8bff;
        }
    }
`;

const MatchLog = () => {
    const { matchLog } = useContext(MatchContext);

    const logs = matchLog.map((data, idx) => {
        return (
            <div className='log-wrap' key={idx}>
                <div className={`log-hitter ${data.result && 'prev-hitter'}`}>{data.number}번 타자 {data.name}</div>
                <div className='log-result'>{data.result && `${data.result}!`}</div>
                <LogDetail log={data.log} />
            </div>
        )
    });

    return (
        <MatchLogWrap>
            {logs}
        </MatchLogWrap>
    )
}

export default MatchLog
