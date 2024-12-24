import React, { useState } from 'react'
import Create from './Create'
import './App.css'

const Home = () => {

    const [todo,setTodo] = useState([]);
  return (
    <div className='home'>
      <h1>To-Do List:-</h1>
      <Create />
      {
        todo.length === 0
        ?
        <h3>No Record Found</h3>
        :
        todo.map(todo =>{
            <div>
                {todo}
            </div>
        })
      }
    </div>
  )
}

export default Home
