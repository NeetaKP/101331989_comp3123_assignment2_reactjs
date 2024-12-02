const express = require('express');
const EmployeeModel = require('../models/Employees');
const fun = require('../functions');
const employeeRoutes = express.Router();
const auth = require("../middleware/auth");
const mongoose = require('mongoose')

//get all employee list
/*
employeeRoutes.get('/employees', auth, async (req, res) => {
    try {
        const employees = await EmployeeModel.find();
        res.status(200).send(employees);
    } catch (e) {
        res.status(500).send({
            status: false,
            message: e.message
        });
    }
})
*/
employeeRoutes.get('/employees', async (req, res) => {
    try {
        const employees = await EmployeeModel.find();
        res.status(200).send(employees);
    } catch (e) {
        res.status(500).send({
            status: false,
            message: e.message
        });
    }
})
/*{
    "first_name": "fname1",
    "last_name": "lname1",
    "email": "emial@domain.com",
    "gender": "male",
    "salary": 500.59
}*/
//add new employee
/*
employeeRoutes.post('/employees', auth, async (req, res) => {
    console.log("Hello-World")
    const {first_name, last_name, 
        email, position, salary, 
        date_of_joining, department} = req.body;
    // validate user input
    console.log(first_name)
    console.log("Hello-World")
    console.log(e.message)
if (fun.isEmpty(req.body)) {
        return res.status(400).send(fun.emptyContentMsg("employee"))
    }
    try {

        const newEmployee = new EmployeeModel(req.body);
        await newEmployee.save();
        res.status(201).send({
            //status: true,
            message: "Employee created successfully.",
            employee_Id: newEmployee
        });
    } catch (e) {
        const duplicate = e.code === 11000;
        if (!(first_name && last_name && email && salary)){
            return res.status(400).send({
                status: false,
                message: "Fields first name, last name, email and salary are required"
            });
        } else if (duplicate) {
            return res.status(400).send({
                status: false,
                message: "This email is already in used"
            });
        } else if (isNaN(salary)) {
            return res.status(400).send({
                status: false,
                message: "Salary must be a number"
            });
        }
        res.status(500).send({
            status: false,
            message: e.message
        });
    }
})
*/
employeeRoutes.post('/employees', async (req, res) => {
    console.log("Hello-World")
    const {first_name, last_name, 
        email, position, salary, 
        date_of_joining, department} = req.body;
    // validate user input
    console.log(first_name)
    console.log("Hello-World")
if (fun.isEmpty(req.body)) {
        return res.status(400).send(fun.emptyContentMsg("employee"))
    }
    try {

        const newEmployee = new EmployeeModel(req.body);
        newEmployee._id = new mongoose.Types.ObjectId();
        newEmployee.created_at = new Date();
        await newEmployee.save();
        res.status(201).send({
            //status: true,
            message: "Employee created successfully.",
            employee_id: newEmployee._id
        });
    } catch (e) {
        const duplicate = e.code === 11000;
        if (!(first_name && last_name && email && salary)){
            return res.status(400).send({
                status: false,
                message: "Fields first name, last name, email and salary are required"
            });
        } else if (duplicate) {
            return res.status(400).send({
                status: false,
                message: "This email is already in used"
            });
        } else if (isNaN(salary)) {
            return res.status(400).send({
                status: false,
                message: "Salary must be a number"
            });
        }
        res.status(500).send({
            status: false,
            message: e.message
        });
    }
})
//display employee details
employeeRoutes.get('/employees/:eid', async (req, res) => {
    const id = req.params.eid;
    try {
        const employee = await EmployeeModel.findById(id);
        console.log(employee)
        
        res.status(200).send(employee);
    } catch (e) {
        res.status(500).send({
            status: false,
            message: `Cannot find employee Id ${id}`
        });
    }
})

//update employee details
employeeRoutes.put('/employees/:eid', async (req, res) => {
    const {first_name, last_name, 
        email, position, salary, 
        date_of_joining, department} = req.body;
    const id = req.params.eid;
    // validate user input
    if (fun.isEmpty(req.body)) {
        return res.status(400).send(fun.emptyContentMsg("employee"))
    }
    try {
        const employee = await EmployeeModel.findById(id);
        if(!employee) {
            let error = new Error(`Employee Id ${id} not found`);
            error.name = "EmployeeIdError";
            throw error;
        }
        if (fun.ifExistButEmpty(first_name)) {
            let error = new Error("First name can not be empty");
            errorSS.name = "FirstNameError";
            throw error;
        }
        if (fun.ifExistButEmpty(last_name)) {
            let error = new Error("Last name can not be empty");
            error.name = "LastNameError";
            throw error;
        }
        if (fun.ifExistButEmpty(email)) {
            let error = new Error("Email can not be empty");
            error.name = "EmailError";
            throw error;
        }
        if (fun.ifExistButEmpty(position)) {
            let error = new Error("Position can not be empty");
            error.name = "PositionError";
            throw error;
        }
      if (fun.ifExistButEmpty(salary)) {
            let error = new Error("Salary can not be empty");
            error.name = "SalaryError";
            throw error;
        }
        if (fun.ifExistButEmpty(department)) {
            let error = new Error("Department can not be empty");
            error.name = "DepartmentError";
            throw error;
        }
        await EmployeeModel.findByIdAndUpdate(id, req.body);
        await EmployeeModel.findByIdAndUpdate(id,{updated_at:new Date()});
        res.status(200).send({
            status: true,
            message: `Employee Id ${id} is updated`
        });
    } catch (e) {
        const duplicate = e.code === 11000;
        if (duplicate) {
            return res.status(400).send({
                status: false,
                message: "This email is already in used"
            });
        } else if (isNaN(salary)) {
            return res.status(400).send({
                status: false,
                message: "Salary must be a number"
            });
        }
        res.status(500).send({
            status: false,
            message: e.message
        });
    }
})

//delete employee
employeeRoutes.delete('/employees/:eid', async (req, res) => {
    try {
        const id = req.params.eid;
        //console.log("msg-1:" + id)

        const deletedEmployee = await EmployeeModel.findByIdAndDelete(id);
        //console.log("msg-2")
        //console.log(deletedEmployee)
        if (deletedEmployee) {
            //204 no content
            res.status(204).send({
                status: true,
                message: "Employee deleted successfully"
            });
    
        } 
        else {
            res.status(500).send({
                status: false,
                message: `Employee Id ${id} not found`
            });
        }
    } catch (e) {
        res.status(500).send({
            status: false,
            message: e.message
        });
    
    }
})

module.exports = employeeRoutes