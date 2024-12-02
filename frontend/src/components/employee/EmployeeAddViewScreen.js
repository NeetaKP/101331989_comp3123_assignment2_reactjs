import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function EmployeeAddView() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  //const onSubmit = data => console.log("mydata:",data);
  let data = "";
  const onSubmit = data => {
    data = axios.post("http://localhost:8084/api/v1/emp/employees",data)
    console.log("datt:",data)
    };
  console.log(errors);
  
  return (
    <>
    <p class="fs-3 fw-bold">Enter employee information</p>
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-3">
      <label class="form-label fw-semibold">First name</label>
      <input type="text" class="form-control" placeholder="Input first name" {...register("first_name", {required: true, maxLength: 100})} />
      </div>
      <div class="mb-3">
      <label class="form-label fw-semibold">Last name</label>
      <input type="text" class="form-control" placeholder="Input last name" {...register("last_name", {required: true, maxLength: 50})} />
      </div>
      <div class="mb-3">
      <label class="form-label fw-semibold">Email</label>
      <input type="text" class="form-control" placeholder="Input email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      </div>
      <div class="mb-3">
      <label class="form-label fw-semibold">Position</label>
      <input type="text" class="form-control" placeholder="Input position" {...register("position", {required: false, maxLength: 50})} />
      </div>
      <div class="mb-3">
      <label class="form-label fw-semibold">Salary</label>
      <input type="text" class="form-control" placeholder="Input salary" {...register("salary", {required: true, maxLength: 50})} />
      </div>
      <div class="mb-3">
      <label class="form-label fw-semibold">Department</label>
      <input type="text" class="form-control" placeholder="Input department" {...register("department", {required: false, maxLength: 50})} />
      </div>

      <input class="btn btn-primary" type="submit"/>

    </form>
     <p> Back to <Link to="/employee" >Employee List</Link></p>  
     </div>                     
                </>
    );
}