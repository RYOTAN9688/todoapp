//Form子コンポーネント
import React from 'react'
import { useState } from 'react'


const Form = ({ addTodo }) => {

    const [text, setText] = useState('')

    const handlesubmit = (e) => {//todoデータの追加処理実行
        e.preventDefault()//ブラウザ標準の挙動をキャンセル
        if (text.trim() === "") return alert('文字を入力してください');
        addTodo(text);
        setText('');
    }
    return (
        <form onSubmit={handlesubmit}>{/*Formイベントが発生したときにhandlesubmit*/}
            < input value={text}//入力eventが発生するたびにvalueを(e.target.value)に置き換える

                onChange={e => {
                    setText(e.target.value)
                }}
                placeholder="タスクを入力"
            />
            <button desabled={text.trim() === ""}>送信</button>
        </form >
    )
}

export default Form;