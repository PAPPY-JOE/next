'use client'
import  { useTransition } from 'react' // do this once you're done with everything else
import { completeTodo } from '@/utils/actions'

const Todo = ({ todo }) => {
    const [isPending, startTransition] = useTransition()

  return (
    <div 
        className={`border border-black/20 cursor-pointer ${todo.completed && 'line-through text-gray-900'}`}
        onClick={() => startTransition(() =>  completeTodo(todo.id))}
    >
        {todo.content}
    </div>
  )
}

export default Todo