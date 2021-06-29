//List Appの子コンポーネント
//Itemの親コンポーネント

import React from 'react';
import Item from './Item.js'


const List = ({ todos, index }) => {
    return (
        <ul>
            {
                todos.map(todo => {
                    return (
                        <Item content={todo.content} key={index} />
                    )
                })
            }
        </ul>
    )
}

export default List;