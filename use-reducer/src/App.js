import React,{useState,useReducer} from 'react'

const ACTIONS = {
  ADD_TODO: 'add-todo'
}

function reducer(todos, action){
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(name), action.payload]
  } 
}

  function newTodo(name){
      return {id: Date.now(), name: name}
  }

export default function App() {
  const [todos, dispatch] = useReducer(reducer,[])
  const [name, setName] = useState("")
  
  function handleSubmit(e){
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: name
    })
    setName("")
  }

  return (
    <>
      <form className='flex justify-center items-center mt-28' onSubmit={handleSubmit}>
        <input className='border w-72 border-gray-950 h-10' type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
      </form>
    </>
  );
}