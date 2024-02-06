import React from "react";

const ToDo = ({id, value, deleteToDo})  => {
    return (
        <div>
            {value} 
            <button onClick={() => deleteToDo(id)} style={{marginTop: "15px", marginLeft: "10px", cursor: "pointer"}}>X</button> 
        </div>

        )
}

export default ToDo