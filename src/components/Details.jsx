import React, { useEffect, useState } from 'react'
const URL = process.env.REACT_APP_DETAILS_URL;

export default function Details(props) {
    const { id } = props;
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState({ details: {} });

    useEffect(() => {
        if (typeof (id) === 'number') {
            try {
                fetch(`${URL + id + '.json'}`)
                    .then(response => response.json())
                    .then((result) => {
                        setLoading(false);
                        setDetails(result)
                    })
            } catch (e) {
                console.error(e);
            }
        }
    }, [id])

    return (
        <>
            {!loading ?
                <div className='Details-Container'>
                    <div className='Details-avatar'>
                        <img src={details.avatar} alt={details.name} />
                    </div>
                    <div className='Details-userName'>{details.name}</div>
                    <div className='Details-city'>City: {details.details.city}</div>
                    <div className='Details-company'>Company: {details.details.company}</div>
                    <div className='Details-position'>Position: {details.details.position}</div>
                </div>
                : ''
            }
        </>
    )
}