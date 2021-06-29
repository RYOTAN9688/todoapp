import React from 'react';
import Form from './Form.js';
import List from './List.js';



const App = () => {
    const todos = [
        {
            content: '課題をする'
        },
        {
            content: '宿題をする'
        },
        {
            content: '電話をする'
        }
    ]
    return (
        <>
            <h1>Todo App</h1>
            <Form />
            <List todos={todos} />
        </>
    )
}

export default App;