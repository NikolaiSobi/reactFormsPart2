import React, {useState} from "react";
import NewToDoForm from "./NewTodoForm";
import ToDo from "./ToDo";


const ToDoList = ()  => {
    const [toDos, setToDos] = useState([])

    

    const createToDo = (string) => setToDos([...toDos, string])
    

    const deleteToDo = (id) => {
        console.log(id)
        const newtoDos = toDos.filter((toDo) => toDo.id !== id)
        setToDos(newtoDos)
    }


    return (
        <div>
            <NewToDoForm createToDo={createToDo}/>
            {toDos.map((toDo) => <ToDo id={toDo.id} value={toDo.text} deleteToDo={deleteToDo}/>)} 
            
        </div>
        
    )
}

export default ToDoList