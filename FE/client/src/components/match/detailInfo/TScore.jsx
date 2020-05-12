import React from 'react'

const TScore = ({ scoreData }) => {
    const inningScoreFrame = [
        <td key='1st'></td>,
        <td key='2st'></td>,
        <td key='3st'></td>,
        <td key='4st'></td>,
        <td key='5st'></td>,
        <td key='6st'></td>,
        <td key='7st'></td>,
        <td key='8st'></td>,
        <td key='9st'></td>];

    const inningScore = scoreData.board.reduce((acc, data, idx) => {
        acc[idx] = <td key={`${data.inning}st`}>{data.scoring}</td>
        return acc;
    }, inningScoreFrame);

    return (
        <tr>
            <td>{scoreData.teamName}</td>
            {inningScore}
            <td>{scoreData.totalScore}</td>
        </tr>
    )
}

export default TScore
