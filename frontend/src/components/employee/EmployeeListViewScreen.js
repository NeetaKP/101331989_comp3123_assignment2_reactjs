import {Link} from 'react-router-dom'
import EmployeeSignUpView from './EmployeeAddViewScreen'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import axios from 'axios'
import { useForm } from 'react-hook-form';
import React, {useState, useEffect } from 'react'
import './Employee.css'

import { useNavigate } from 'react-router-dom';

export default function EmployeeListView() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [employees, setEmployees] = useState([])
    const [item1,setItem1] = useState("")

    console.log("aaaa")
    useEffect(() => {
        function onSubmit(){
            axios.get("http://localhost:8084/api/v1/emp/employees")
            .then(response=>{
                const employees = response.data
                setEmployees(employees)
            })
        //const dataProbj = prObj.then((response) => response.data)
        //const data = prObj.then((data) => data)
            console.log("data:",employees)
        }
        onSubmit();
    },[]);

    const navigate=useNavigate();


    const toEmployeeView = (item1)=> {
        navigate('/employee/view',{state:item1})
    }

    const toEmployeeUpdate = (item1) => {
        navigate('/employee/update',{state:item1})
    }

    const toEmployeeDelete = (item1) => {
        navigate('/employee/delete',{state:item1})
    }

      
    return(
        <>
        <p class="fs-3 fw-bold">Employee View </p>

        <table>
            <thead>
            <tr>
                <th> Employee First name </th> <th> Employee Last name </th> <th> Employee Id </th> <th> Actions </th>
            </tr>
            </thead>
            <tbody>
            {
            employees.map(
                (item,index) => (
                <tr key={index}>
                    <td> {item.first_name} </td> <td> {item.last_name} </td> <td> {item._id} </td> 
                    <td> <button type="button" class="btn btn-info" onClick={()=> toEmployeeUpdate(item)}>Update</button>
                    <button type="button" class="btn btn-danger" onClick={()=> toEmployeeDelete(item)}>Delete</button>
                    <button type="button" class="btn btn-info"onClick={()=> toEmployeeView(item)}>View</button> </td>
                </tr>
                ))
            }
        </tbody>
        </table>
        <div>
            <button type="button" class="btn btn-warning"> <Link to="/employee/add" >Add New Employee</Link> </button>
        </div>
        <ul>
            <li>
                <Link to="/">Back to home</Link>
            </li>
        </ul>
        
        </>
    )
}