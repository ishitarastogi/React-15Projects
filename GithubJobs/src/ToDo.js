import React, { useReducer,useState } from 'react'
import Todos from './Todos';
const ACTIONS={
    ADD_TODO:'add-todo',
    TOGGLE_TODO:'toggle-todo'
}
function reducer(todos,action){
switch(action.type){
case ACTIONS.ADD_TODO:
    return[...todos,newTodo(action.payload.name)]
case ACTIONS.TOGGLE_TODO:

default:
    return todos
}

function newTodo(name){
return {id: Date.now(), name:name,complete:false}
}
}
function ToDo() {
    const[todos,dispatch]=useReducer(reducer,[])
    const[name, setName]=useState('')

    function handleSubmit(e){
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TODO, payload:{name:name}})
        setName('')
    }
    console.log(todos)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name}  onChange={e => setName(e.target.value)}/>
            </form>
            {todos.map(todo => {
 return <Todos key={todo.id} todo={todo}/>
            })}
        </div>
    )
}

export default ToDo
