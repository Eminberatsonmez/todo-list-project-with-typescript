import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TodoInitialState, TodoType } from '../types/Types'

const initialState: TodoInitialState = {
    todos: [],
    completed: false,
    checked: false
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload]
        },
        removeTodo: (state: TodoInitialState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter(todo => todo.id !== action.payload)];
        },
        updateTodo: (state: TodoInitialState, action: PayloadAction<{ id: number, content: string }>) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.content = action.payload.content;
            }

        }
    }
}
)

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer