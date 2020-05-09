import React from 'react'

const LogDetail = ({ log }) => {
    const logDetails = log.map(data => {
        return (
            <div className='log-detail' key={data.id}>
                <div className='log-detail-id'>{data.id}</div>
                <div className='log-detail-status'>{data.status}</div>
                <div className='log-detail-b-count'>S{data.strike} B{data.ball}</div>
            </div>
        )
    });

    return (
        <>
            {logDetails}
        </>
    )
}

export default LogDetail
