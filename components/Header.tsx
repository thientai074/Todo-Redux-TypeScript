import React from 'react'
import { useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo} from '../redux/todosSlice'

const Header = () => {
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()

    const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
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
    <header className="header">
           <h1 style={{fontSize: '30px', color: '#ff8898'}}>ToDos</h1>
           <form onSubmit={handleAddTodo}>
           <input 
                className="new-todo"
                placeholder="What needs to be done?"
                value={title}     
                onChange={e => setTitle(e.target.value)}  
                
            />
           </form>
        </header>
  )
}

export default Header