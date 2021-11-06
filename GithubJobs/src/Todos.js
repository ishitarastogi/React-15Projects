import React from 'react'

function Todos(props) {
    return (
        <div>
            <span style={{color: props.todo.complete ? '#AAA' : '#000'}}>
                {props.todo.name}
                </span>
            <button>Toggle</button>
            <button>Delete </button>
        </div>
    )
}

export default Todos
