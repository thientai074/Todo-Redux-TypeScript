import React, { useState } from 'react'
import styles from '../styles/TodoForm.module.css'
import {useDispatch} from 'react-redux'
import { addTodo} from '../redux/todosSlice'
import { v4 as uuidv4 } from 'uuid';


const TodoForm = () => {
  const [title, setTitle]= useState('')
  const dispatch = useDispatch()  

  const submitForm =  ( event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(!title) return ;
      dispatch(addTodo({
      id: Math.random(),
      title,
      completed: false
    }))
    setTitle('')    
  }
  return (
    <div >
        <form onSubmit={submitForm} className={styles.TodoForm}>
            <input 
                className={styles.input} 
                type="text" 
                placeholder="What needs to be done ?"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />            
        </form>
    </div>
  )
}

export default TodoForm