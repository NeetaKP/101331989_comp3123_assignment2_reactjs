
import { NavLink } from "react-router-dom";

import AsyncStorage from '@react-native-async-storage/async-storage';

const NavBar = () => {

  const status = AsyncStorage.getItem("log-status")
  const email = AsyncStorage.getItem("log-email")

  


  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">Employee management</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="/">Home </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/user">Users</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/employee">Employee</a>
    </li>
  </ul>
</div>
</nav>
</>
  );
};

export default NavBar;