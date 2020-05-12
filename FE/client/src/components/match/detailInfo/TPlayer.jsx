import React from 'react'

const TPlayer = ({ teamData }) => {
    const hitters = teamData.teamInfo.map((hitter, idx) => {
        return (
            <tr key={idx}>
                <td>{hitter.name}</td>
                <td>{hitter.batterBox}</td>
                <td>{hitter.hit}</td>
                <td>{hitter.out}</td>
                <td>{hitter.average}</td>
            </tr>
        )
    });

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan='5'>{teamData.teamName}</th>
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
                {hitters}
                <tr>
                    <td>Totals</td>
                    <td>{teamData.totalsBatterBox}</td>
                    <td>{teamData.totalsHit}</td>
                    <td>{teamData.totalsOut}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default TPlayer
