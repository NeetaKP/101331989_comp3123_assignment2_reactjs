import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

export default function EmployeeDeleteView() {

  const location = useLocation();
  console.log("route:",location.state)

  console.log("location.state:",location.state)


  const { register, handleSubmit, formState: { errors } } = useForm();
  //const onSubmit = data => console.log("mydata:",data);
  let data = "";
  const onSubmit = () => {
    data = axios.delete("http://localhost:8084/api/v1/emp/employees/"+location.state._id)
    console.log("datt:",data)
    };
  console.log(errors);

  
  return (
    <>

    <p class="fs-3 fw-bold">Delete the following employee? </p>

    <form class="row g-3 m-4" style={{flex:1, flexDirection:"column", justifyContent:"space-between"}} onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label class="form-label fw-semibold">First name</label> <text>{location.state.first_name}</text>
    </div>
    <div>
      <label class="form-label fw-semibold">Last name</label> <text>{location.state.last_name}</text>
    </div>
    <div>
      <label class="form-label fw-semibold">Email</label> <text>{location.state.email}</text>
    </div>
    <div>
      <label class="form-label fw-semibold">Position</label> <text>{location.state.position}</text>
    </div>
    <div>
      <label class="form-label fw-semibold">Salary</label> <text>{location.state.salary}</text>
    </div>
    <div>
      <label class="form-label fw-semibold">Department</label> <text>{location.state.department}</text>
    </div>


      <input class="btn btn-primary col-md-2" type="submit"/>

    </form>
     <p> Back to <Link to="/employee" >Employee List</Link></p>                       
                </>
    );
}