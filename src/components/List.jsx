import React from 'react';
import Item from './Item';

export default function List(props) {
    const { users, getDetails } = props;

    return (
        <ul className='list'>
            {users.map(el =>
                <Item
                    getDetails={getDetails}
                    key={el.id}
                    id={el.id}
                    name={el.name} />)}
        </ul>
    )
}