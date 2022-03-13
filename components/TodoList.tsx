import React from 'react'
import Todo from './Todo'

interface Todo {
    id: number
    title: string
    completed: boolean
}

interface TodoType {
    todos: Todo[]
}
const TodoList = ({todos}: TodoType) => {
    console.log(todos);
    
  return (
    <section className="main">
            <input
                className="toggle-all"
                type="checkbox"
                onChange={() => {
                    console.log('mmark done')
                  
                }}
               
            />
            <label htmlFor="toggle-all"  ></label>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <Todo key={todo.id} todo={todo} index={index} />
                ))}
            </ul>

        </section>
  )
}

export default TodoList