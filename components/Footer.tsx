import React from 'react'
import { useSelector } from 'react-redux'
import {RootState} from '../redux/index'
import { useDispatch} from 'react-redux'

const Footer = () => {
    const todos = useSelector((state: RootState) =>state.todos.allTodos)
    
    const todoCompleted = useSelector((state: RootState) => state.todos.allTodos.filter(todo =>todo.completed === true))

    

    console.log(todoCompleted)
  return (
    <footer className="footer">
            <span className="todo-count">
                {todos.length > 1 ? (
                    <p>{todos.length} items left</p>
                ) : 
                (todos.length === 1) ? (
                    <p>1 item left</p>
                ) : ''}
            </span>
                    
            <ul className="filters">
                <li>
                    <a
                        href="#/"                        
                    >
                        All
                    </a>
                </li>
                <span></span>
                <li>
                    <a
                        href="#/active"                       
                    >
                        Active
                    </a>
                </li>
                <span></span>
                <li>
                    <a
                        href="#/completed"                        
                    >
                        Completed
                    </a>
                </li>
            </ul>
           clear all completed
        </footer>
  )
}

export default Footer