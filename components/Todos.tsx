import { useDispatch, useSelector } from "react-redux"
import {deleteTodo, markCompleted} from '../redux/todosSlice'
import { useState } from 'react'
import { updateTodo} from '../redux/todosSlice'


interface Todo {
  id: number
  title: string
  completed: boolean

}
interface TodoTypes {
  todos: Todo[]
}
const Todos = ({todos} : TodoTypes ) => {
  const [isEdit, setIsEdit] = useState(false)
  const [titleEdit, setTitleEdit] = useState('')

  const dispatch = useDispatch()

  const toggleCompleted = (id: number) => {
    dispatch(markCompleted(id))
  }

  const handlerDeleteTodo = (index: number) => {
    dispatch(deleteTodo(index)) 
  }

  const onSubmitTitleEdit = (event: React.FormEventHandler<HTMLFormElement>) => {   
  }

 

  console.log(todos) 
 
  return (
    <div>
      <ul style={{listStyle: 'none'}}>
      {todos.map((todo, index) => {
        if(!isEdit) {
          return (<li style={{display: 'flex', width: '250px',justifyContent:'space-between'}} key={todo.id} className={todo.completed ? 'completed' : ''}>
          <input type="checkbox"  checked={todo.completed} onChange={toggleCompleted.bind(this, todo.id)} />
          <label onClick={() => 
            setIsEdit(true)
        } >{todo.title}</label>      
          <button style={{border: 'none', backgroundColor: 'transparent', color: '#ff8898'}} onClick={handlerDeleteTodo.bind(this, todo.id)}>X</button>
        </li>)
        } else {
          return (
            <form key={todo.id} >
              <input value={titleEdit}  className='inputEdit' onChange={(e) => setTitleEdit(e.target.value)} />   
            </form>               
          )
        }
      })}
      
     
    
      </ul>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div className='todoTotal btn-mx'>
          {todos.length > 1 ? (
            <p>{todos.length} items left</p>
          ) : (todos.length === 1) ? (
            <p>1 item left</p>
          ) : ''}
        </div>
        <div className='allButton btn-mx'>
          <button>All</button>
        </div>
        <div className='activeButton btn-mx'>
          <button>Active</button>
        </div>
        <div className='completedButton btn-mx'>
          <button>Completed</button>
        </div>
      </div>
    </div>
  )
}

export default Todos