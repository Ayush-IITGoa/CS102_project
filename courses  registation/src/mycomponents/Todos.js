import React from 'react'
import Todoitem from "../mycomponents/Todoitem.js"

export const todos = (props) => {
  return (
    <div className='container'>
        <h4 align="center">Registered Courses</h4>
        {/* this is the higher order  javascript */}
        {props.todo.length===0? "No registered courses":
        props.todo.map((todo)=> {
          return <Todoitem todo ={todo} key ={todo.sno} onDelete ={props.onDelete} /> 
        })}



    </div>
  )
}

export default todos
