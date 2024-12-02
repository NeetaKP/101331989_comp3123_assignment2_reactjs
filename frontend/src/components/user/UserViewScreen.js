import {Link} from 'react-router-dom'
import UserSignUpView from './UserSignUpViewScreen'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

export default function UserView() {
    return(
        <>
        <h1>User View </h1>
        <div>
                <Link class="btn btn-warning" style={{marginLeft:20}} to="/user/signup" >Sign Up</Link>
                <Link class="btn btn-success" style={{marginLeft:20}} to="/user/login" >Login</Link>
        </div>
        
        </>
    )
  
}