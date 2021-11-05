import React, { useReducer } from 'react'
function reducer(state,action){
    return{count:state.count+1}
    // current state
    //action: what we pass into dispatch function
    //whatever we call dispatch with  is going to set this to action variable
    //and then our current state is goin to be in state variable
    //and reducer will give us new updated state
}
function Reducer() {
    const[state, dispatch]=useReducer(reducer, {count:0})
    // reducer: which is a function that we have perform on our state to get new state
    //initial value: generally an object(as state is more complex here)
    //dispatcher:
    //1. Updates our state
    //2. call the reducer function
    //3. 

    function increment(){
        dispatch()
    }
    return (
        <div>
            <button onClick={increment}></button>
            <span>{state.count}</span>
        </div>
    )
}

export default Reducer
