import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {Link} from 'react-router-dom'

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserLogInView() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  //const onSubmit = data => console.log("mydata:",data);
  let data = "";
  const onSubmit = data => {
    const data1 = axios.post("http://localhost:8084/api/v1/user/login",data)
    if(data1){
      // keep user logged in - session
      AsyncStorage.setItem("log-status",true)
      AsyncStorage.setItem("log-email",data.email)
    }
    console.log("datt:",data)
    };
  console.log(errors);
  
  return (
    <>
    <p class="fs-3 fw-bold">User login</p>

    <form class="mb-3" style={{marginLeft:30}} onSubmit={handleSubmit(onSubmit)}>
    <div class="mb-3">
    <label class="form-label fw-semibold   col-md-1">Email</label>

      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      </div>
      <div class="mb-3">
      <label class="form-label fw-semibold   col-md-1">Password</label>

      <input type="text" placeholder="Password" {...register("password", {required: true, minLength: 6, maxLength: 12})} />

      </div>
      <input type="submit" />
    </form>
         <p> Don't have have account? <Link to="/user/signup" >Sign Up</Link></p>                       
         </>

  );
}