import React, { use } from 'react'
import { motion } from 'framer-motion'
import TodoBody from './todoBody'
import Todo from './todo'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/todoSlice'
import type { TodoType } from '../types/Types'
import type { RootState } from '../redux/store'


function TodoHead() {
    const dispatch = useDispatch();
    const { todos } = useSelector((state: RootState) => state.todo);
    const [newTodo, setNewTodo] = React.useState<string>('');

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("Please enter a valid todo");
            return;
        }
        const payload: TodoType = {
            id: Date.now(),
            content: newTodo
        };
        dispatch(addTodo(payload));
        setNewTodo('');
    }
    return (
        <div className='flex flex-initial '>
            <div className='flex-grow bg-neutral-950'>
                <div className=' font-bold h-screen p-4'>
                    <div className='bg-neutral-900 rounded-lg p-4 shadow-md'>
                        <h1 className='text-gray-100 text-3xl'>TodoList </h1>
                        <div className='flex place-items-baseline p-4 justify-center h-24 bg-neutral-900'>
                            <div className='flex '>
                                <div className='pr-4 text-shadow-green-900'>
                                    <input value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} type="text" placeholder='add new todo a task' className='input input-success w-full max-w-xs' />
                                </div>
                                <div>
                                    <button onClick={handleCreateTodo} className='btn btn-success'>Add Todo</button>
                                </div>
                                <TodoBody />
                            </div>

                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            {todos && todos.map((todo: TodoType) => (
                                <Todo key={todo.id} TodoProps={todo} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default TodoHead