import React from 'react'
import {useState} from 'react'
import { useDispatch} from 'react-redux'
import { deleteTodo} from '../redux/todosSlice'
import { markCompleted} from '../redux/todosSlice'
import { updateTodo} from '../redux/todosSlice'

interface TodoJustOne {
    id: number
    title: string
    completed: boolean
}

interface TodoTypesss {
    todo: TodoJustOne
    index: number
}
const Todo = ({todo, index}: TodoTypesss) => {
    const [ isEditing, setIsEditing] = useState(false)

    const [newTitle, setNewTitle] = useState(todo.title)

    const dispatch = useDispatch()

    const handleUpdateTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(updateTodo({
            id: todo.id,
            title: newTitle,
            completed: todo.completed
        }))
        setIsEditing(false)
      
    }       
    

  return (
    <li className={`${isEditing ? 'editing' : ''} ${todo.completed ? 'completed' : ''} }`}>
            {
                !isEditing ?
                    <div className="view">
                        <input
                            className="toggle"
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => {dispatch(markCompleted(todo.id))}}                            
                        />
                        <label onDoubleClick={() => {setIsEditing(true)}} >{todo.title}</label>
                        <button className="destroy" onClick={() => {dispatch(deleteTodo(todo.id))}}  />
                    </div> :
                    <form onSubmit={handleUpdateTodo.bind(todo.id)} >
                        <input
                        className="edit"
                        value={newTitle}
                        onChange ={e => setNewTitle(e.target.value)}                       
                    />
                    </form>
            }
        </li>
  )
}

export default Todo