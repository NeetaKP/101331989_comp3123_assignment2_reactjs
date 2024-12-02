import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {Link} from 'react-router-dom'


export default function UserSignUpView() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  //const onSubmit = data => console.log("mydata:",data);
  let data = "";
  const onSubmit = data => {
    data = axios.post("http://localhost:8084/api/v1/user/signup",data)
    console.log("datt:",data)
    };
  console.log(errors);
  
  return (
    <>
    <p class="fs-3 fw-bold">New user signup</p>

    <form  class="mb-3" style={{margin:20}} onSubmit={handleSubmit(onSubmit)}>
    <div class="mb-3">
    <label class="form-label fw-semibold   col-md-1">Username</label>
      
      <input class="form-label fw-semibold" type="text" placeholder="Username" {...register("username", {required: true, maxLength: 80})} />
    </div>
    <div class="mb-3">
    <label class="form-label fw-semibold  col-md-1">Email</label>
    
      <input class="form-label fw-semibold" type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
    </div>
    <div class="mb-3">
    <label class="form-label fw-semibold  col-md-1" >Password</label>
      <input class="form-label fw-semibold" type="text" placeholder="Password" {...register("password", {required: true, minLength: 6, maxLength: 12})} />
    </div>
 
      <input type="submit"/>

    </form>
     <p> Already have account? <Link to="/user/login" >Login</Link></p>                       
                </>
    );
}