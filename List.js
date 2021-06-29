//List Appの子コンポーネント
//Itemの親コンポーネント

import { nanoid } from 'nanoid';
import React from 'react';
import Item from './Item.js'


const List = ({ todos, deletoTodo }) => {
    return (
        <ul>
            {
                todos.map(todo => {
                    return (
                        <Item content={todo.content}
                            id={nanoid.id}
                            key={todo.id} />
                    )
                })
            }
        </ul>
    )
}

export default List;