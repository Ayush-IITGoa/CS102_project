import './App.css';

import Header from "./mycomponents/header"; 
import Footer from './mycomponents/footer';
import Todos from './mycomponents/Todos';
import AddTodo from './mycomponents/addtodo';

import React, { useState, useEffect } from 'react';

function App() {
  
  // Initialize initem with a default value if "todos" is null
  let initem = [{
    sno: 1,
    title: "Example Course",
    desc: "Course Instructor:John Doe ; Office:F-17,Mining Building"
  }];
  
  if (localStorage.getItem("todos") === null) {
    
  } else {
    initem = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // Use the functional form of setTodos to ensure the latest state
    ///console.log("it delete the tsk " , todo);
    // tp delet the value in todos we use the setTodos function 
    // in todos.filte we seprate the e from the todos 
    setTodos(prevTodos => prevTodos.filter(e => e !== todo));

    // it is automaticaly save when the user change the todos list  no warry to save it again
  }

  // above the ondelete function 

  const addtodo = (title, desc) => {
    let sno = todos.length + 1;
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    // Use the functional form of setTodos to ensure the latest state
    setTodos(prevTodos => [...prevTodos, mytodo]);
    
  }

  // useEffect to update localStorage whenever todos changes


  // Use initem as the initial state for todos
  const [todos, setTodos] = useState(initem);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Header title="Course Registration" searchbar={false} />
      <AddTodo addtodo={addtodo} />
      <Todos todo={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
