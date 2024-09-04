import React, { useState } from 'react';

const AddTodo = (props) => {
  const [title ,  settitle] =useState("");
  const [desc , setDesc] = useState("");
  const submit=(e)=>{
    e.preventDefault();
    //if(!title || !desc){
    //    alert("title or description should not be empty") ;
    //}
    props.addtodo(title , desc) ;
  }
  return (
    <div className="container my-3">
    <h4 align="left">Add your courses</h4>
    <div className="row justify-content-left">
      <div className="col-md-6">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="taskName" className="form-label">Course Code</label>
             <select className="form-control" id="taskName" value={title} onChange={(e) => settitle(e.target.value)}>
              <option value="Select Course">Select a Course</option>
              <option value="CS100 - Introduction to Profession">CS100 - Introduction to Profession</option>
	      <option value="CS101 - Introduction to Programming">CS101 - Introduction to Programming</option>
              <option value="CS102 - Software Tools">CS102 - Software Tools</option>
              <option value="CS210 - Digital Systems Design">CS210 - Digital Systems Design</option>
              <option value="CS220 - Data Structures and Algorithms">CS220 - Data Structures and Algorithms</option>
     	      <option value="CS221 - Discrete Structures">CS221 - Discrete Structures</option>
              <option value="CS230 - Probability and Statistics for Computer Science">CS230 - Probability and Statistics for Computer Science</option>
              <option value="CS211 - Computer Architecture">CS211 - Computer Architecture</option>
              <option value="CS212 - Computer Networks">CS212 - Computer Networks</option>
              <option value="CS222 - Algorithm Design">CS222 - Algorithm Design</option>
              <option value="CS300 - Programming Language Paradigms">CS300 - Programming Language Paradigms</option>
              <option value="CS310 - Operating Systems">CS310 - Operating Systems</option>
              <option value="CS320 - Logic in Computer Science">CS320 - Logic in Computer Science</option>
              <option value="CS330 - Artificial Intelligence">CS330 - Artificial Intelligence</option>
              <option value="CS331 - Machine Learning">CS331 - Machine Learning</option>
              <option value="CS321 - Theory of Computation">CS321 - Theory of Computation</option>
              <option value="CS311 - Compiler Design">CS311 - Compiler Design</option>

              {/* Add more courses as needed */}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Name and Details</label>
              <select className="form-control" id="description"  value={desc} onChange={(e) => setDesc(e.target.value)}>
               <option value="Select Course">Select a Course</option>
               <option value="Multiple">Instructor(s): Multiple   Credit(s):1</option>
               <option value="CS101 Instructor(s): Dr. Clint Pazhayidam George Credit(s) : credit :4">CS101 Instructor(s): Dr. Clint Pazhayidam George Credit(s) : credit :4</option>
               <option value="CS102 Instructor(s): Dr. Clint Pazhayidam George Credit(s):3"> CS102 Instructor(s): Dr. Clint Pazhayidam George Credit(s):3</option>
               <option value="CS210 Instructor(s): Dr. Rahul C S  :Credit(s):4">CS210 Instructor(s): Dr. Rahul C S  :Credit(s):4</option>
               <option value="CS220 Instructor(s): Dr. Arpita Korwar  :  Credit(s):4">CS220 Instructor(s): Dr. Arpita Korwar  :  Credit(s):4</option>
               <option value="CS221 Instructor(s): Dr. Saurabh Trivedi :  Credit(s):3">CS221  Instructor(s): Dr. Saurabh Trivedi :  Credit(s):3</option>
               <option value="CS230  Instructor(s): Dr. Satyanath Bhat :  Credit(s):3">CS230 Instructor(s): Dr. Satyanath Bhat :  Credit(s):3</option>
               <option value=" CS211 Instructor(s): Dr. Sharad Sinha   :  Credit(s):4">CS211 Instructor(s): Dr. Sharad Sinha   :  Credit(s):4</option>
               <option value="CS212 Instructor(s): Dr. Neha Karanjkar :  Credit(s):4">CS212 Instructor(s): Dr. Neha Karanjkar :  Credit(s):4</option>
               <option value=" CS222 Instructor(s): Dr. Rahul C S :  Credit(s):4">CS222 Instructor(s): Dr. Rahul C S :  Credit(s):4</option>
               <option value="CS300 Instructor(s): Credit(s):4">CS300 Instructor(s): Credit(s):4</option>
               <option value="CS310 Instructor(s): Credit(s):4 ">CS310 Instructor(s): Credit(s):4</option>
               <option value="CS320 Instructor(s): Credit(s):3">CS320 Instructor(s): Credit(s):3</option>
               <option value="CS330 Instructor(s):  Credit(s):4 ">CS330 Instructor(s):  Credit(s):4</option>
               <option value="CS331 Instructor(s): Credit(s):4 ">CS331 Instructor(s): Credit(s):4</option>
               <option value="CS321 Instructor(s): Credit(s):3 ">CS321 Instructor(s): Credit(s):3</option>
               <option value="CS311 Instructor(s): Credit(s):4">CS311 Instructor(s): Credit(s):4</option>

              {/* Add more courses as needed */}
              </select>  
	   </div>
          <button type="submit" className="btn btn-success">Add course</button>
        </form>
      </div>
    </div>
  </div>
);
};


export default AddTodo;
