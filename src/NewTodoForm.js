import React, { useState } from "react";
import ToDo from './ToDo'

const NewToDoForm = ({createToDo})  => {
    const[id, setId] = useState(1)

    const[formData, setFormData] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData("")
        createToDo({id: id, text: formData})
        setId(id + 1)
        
        
    }
    const handleChange = (e) => {
        setFormData(e.target.value)
    }


    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <input type="text" placeholder="What To Do" value={formData} ></input>
            <button>Add To Do</button>
        </form>
    )
}

export default NewToDoForm