import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import NavBar from './NavBarView';

import HomeView from './components/HomeViewScreen'
import UserView from './components/user/UserViewScreen'
import UserSignUpView from './components/user/UserSignUpViewScreen';
import UserLogInView from './components/user/UserLogInViewScreen';

import EmployeeListView from './components/employee/EmployeeListViewScreen';
import EmployeeAddView from './components/employee/EmployeeAddViewScreen'
import EmployeeUpdateView from './components/employee/EmployeeUpdateViewScreen'
import EmployeeDeleteView from './components/employee/EmployeeDeleteViewScreen';
import EmployeeViewView from './components/employee/EmployeeViewViewScreen'

export default function MyNav() {

    return(
        <Router>
            <div>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<HomeView/>} />
                    <Route path="/user" element={<UserView />} />
                    <Route path="/user/signup" element={<UserSignUpView/>}/>
                    <Route path="/user/login" element={<UserLogInView/>}/>
                    <Route path="/employee" element={<EmployeeListView/>}/>
                    <Route path="/employee/add" element={<EmployeeAddView/>}/>
                    <Route path="/employee/update" element={<EmployeeUpdateView/>}/>
                    <Route path="/employee/delete" element={<EmployeeDeleteView/>}/>
                    <Route path="/employee/view" element={<EmployeeViewView/>}/>
                </Routes>
            </div>
        </Router>
    )

}