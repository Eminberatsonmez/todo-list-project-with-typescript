import { div } from 'motion/react-client'
import React from 'react'
import { MdEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../redux/todoSlice';
import { motion } from 'motion/react';

interface TodoProps {
    id: number;
    content: string;
}

function Todo({ TodoProps: { id, content } }: { TodoProps: TodoProps }) {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = React.useState<string>(content);
    const [isEditing, setIsEditing] = React.useState<boolean>(false);
    const [completedTodo, setCompletedTodo] = React.useState<boolean>(false);

    const handleEditToggle = () => {
        if (isEditing && newTodo !== content) {
            dispatch(updateTodo({ id, content: newTodo }));
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className="">
            <motion.div whileHover={{ scale: 1.1 }}
                whileTap={{}} className="bg-cyan-700 text-zinc-300 rounded-lg shadow-md flex flex-row items-center justify-between p-4 gap-6">
                <div className="flex flex-col">
                    {isEditing ? (
                        <input
                            className="input input-secondary text-black"
                            type="text"
                            value={newTodo}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                        />
                    ) : (
                        <p className="text-md font-medium whitespace-pre-line">{content}</p>
                    )}
                    {completedTodo && (
                        <span className="flex items-center justify-center p-0.5 text-lime-600 bg-zinc-300 rounded-2xl text-xs mt-1">todo completed</span>
                    )}
                </div>
                <motion.div whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-3 ml-4">
                    <MdEdit onClick={handleEditToggle} className="text-zinc-300 hover:text-zinc-100 cursor-pointer text-lg" />
                    <RiDeleteBinLine onClick={() => dispatch(removeTodo(id))} className="text-zinc-300 hover:text-zinc-100 cursor-pointer text-lg" />
                    <FaCheck onClick={() => setCompletedTodo(!completedTodo)} className="text-zinc-300 hover:text-zinc-100 cursor-pointer text-lg" />
                </motion.div>
            </motion.div>
        </div >
    )
}

export default Todo