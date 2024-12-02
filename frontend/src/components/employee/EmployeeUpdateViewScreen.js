import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
export default function EmployeeUpdateView() {

  const location = useLocation();
  console.log("route:",location.state)

  console.log("location.state:",location.state)


  const { register, handleSubmit, formState: { errors } } = useForm();
  //const onSubmit = data => console.log("mydata:",data);
  let data = "";
  const onSubmit = data => {
    data = axios.put("http://localhost:8084/api/v1/emp/employees/"+location.state._id,data)
    console.log("datt:",data)
    };
  console.log(errors);

  
  return (
    <>
        <p class="fs-3 fw-bold">Update Employee</p>

    <form class="row g-3 m-4" style={{flex:1, flexDirection:"column", justifyContent:"space-between"}} onSubmit={handleSubmit(onSubmit)}>
      <div class="col-md-4">
      <label class="form-label col-md-3">First name</label>
      <input type="text" placeholder={location.state.first_name}  {...register("first_name", {required: false, maxLength: 100})} />
      </div>
      <div class="col-md-4">
      <label class="form-label  col-md-3">Last name</label>
      <input type="text" placeholder={location.state.last_name}  {...register("last_name", {required: false, maxLength: 50})} />
      </div>
      <div class="col-md-4">
      <label class="form-label  col-md-3">Email</label>
      <input type="text" placeholder={location.state.email}  {...register("email", {required: false, pattern: /^\S+@\S+$/i})} />
      </div>
      <div class="col-md-4">
      <label class="form-label  col-md-3">Position</label>
      <input type="text" placeholder={location.state.position}  {...register("position", {required: false, maxLength: 50})} />
      </div>
      <div class="col-md-4">
      <label class="form-label  col-md-3">Salary</label>
      <input type="text" placeholder={location.state.salary}  {...register("salary", {required: false, maxLength: 50})} />
      </div>
      <div class="col-md-4">
      <label class="form-label  col-md-3">Department</label>
      <input type="text" placeholder={location.state.department}  {...register("department", {required: false, maxLength: 50})} />
      </div>

      <input class="btn btn-primary col-md-2" type="submit"/>

    </form>
     <p> Back to <Link to="/employee" >Employee List</Link></p>                       
                </>
    );

}