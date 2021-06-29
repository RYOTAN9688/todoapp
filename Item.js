//Item子コンポーネント 

import React from 'react';
import { useState } from 'react';


const Item = ({ content, id, deleteTodo }) => {
    const [isDone, setIsDone] = useState(false);//isDoneの初期値をfalseとする
    const hundleDelete = () => {
        deleteTodo(id)
    }
    return (
        <>
            <li>
                <input type='checkbox' onChange={() => {
                    setIsDone(!isDone)//checkboxをクリックすると、isDoneがtrueになる
                }} />
                <span style={
                    { textDecoration: isDone ? 'line-through' : 'none' }
                }
                >{content}</span>
            </li >
        </>
    )
}

export default Item;