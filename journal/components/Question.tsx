'use client'

import { askQuestion } from "@/utils/api";
import { useState } from "react";

const Question = () => {
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState('')
    const onChange = (e) =>{
        e.preventDefault();
        setValue(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        const answer = await askQuestion(value)
        console.log(JSON.stringify)
        setResponse(answer)
        setValue('')
        setLoading(false)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                disabled={loading}
                type="text"
                placeholder="Ask a question..."
                onChange={onChange}
                value={value}
                className="border border-black/20 px-4 py-2 text-lg rounded"
            />
            <button 
                className="bg-blue-400 px-4 py-2 rounded-lg text-lg" 
                type="submit"
                disabled={loading}
            >Ask</button>
        </form>
        { loading && <div>...loading</div>}
        { response && <div>{response}</div>}
    </div>
  )
}

export default Question