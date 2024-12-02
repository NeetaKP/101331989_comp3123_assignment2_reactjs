import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

export default function EmployeeViewView() {

  const location = useLocation();
  console.log("route:",location.state)

  console.log("location.state:",location.state)


  // const { register, handleSubmit, formState: { errors } } = useForm();
  // //const onSubmit = data => console.log("mydata:",data);
  // let data = "";
  // const onSubmit = data => {
  //   data = axios.post("http://localhost:8084/api/v1/emp/employee/"+location.state._id,data)
  //   console.log("datt:",data)
  //   };
  // console.log(errors);

  
  return (
    <div style={{margin:20}}>
   <p class="fs-3 fw-bold">View employee Details </p>

    <div>
      <label class="fw-bold">First name:</label> <text>{location.state.first_name}</text>
    </div>
    <div>
      <label class="fw-bold">Last name</label> <text>{location.state.last_name}</text>
    </div>
    <div>
      <label class="fw-bold">Email</label> <text>{location.state.email}</text>
    </div>
    <div>
      <label class="fw-bold">Position</label> <text>{location.state.position}</text>
    </div>
    <div>
      <label class="fw-bold">Salary</label> <text>{location.state.salary}</text>
    </div>
    <div>
      <label class="fw-bold">Department</label> <text>{location.state.department}</text>
    </div>

     <p> Back to <Link to="/employee" >Employee List</Link></p>                       
                </div>
    );
}