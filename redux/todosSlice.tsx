import { createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Todo {
    id: number
    title: string
    completed: boolean
}

interface TodoState {
    allTodos: Todo[]
}

const initialState: TodoState = {
    allTodos: []
}

export const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: ( state, action: PayloadAction<Todo>) => {
            state.allTodos.push(action.payload)
        },
        deleteTodo: ( state, action) => { 
            const index = state.allTodos.findIndex(item => item.id === action.payload)                   
            state.allTodos.splice(index, 1)
        },
        markCompleted: ( state, action) => {
            state.allTodos.map(todo => {
                if(todo.id === action.payload) todo.completed = !todo.completed
            })
        },
        updateTodo: (state, action) => {
            const index = state.allTodos.findIndex(item => item.id === action.payload.id)                   
            state.allTodos.splice(index, 1, action.payload)
        },
        completedTodo: (state, action) => {
            state.allTodos.map(todo => todo.completed)
        }

    }
})

export const {addTodo, deleteTodo, markCompleted, updateTodo} = TodoSlice.actions

const TodoReducer = TodoSlice.reducer

export default TodoReducer
