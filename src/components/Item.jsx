import React from 'react'

export default function Item(props) {
    const { id, name, getDetails } = props;

    return (
        <li className='item' onClick={() => getDetails(id)} >
            {name}
        </li>
    )
}