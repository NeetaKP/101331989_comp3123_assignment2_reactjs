import './App.css';

import React from 'react';
import MyNav from './NavView'
import NavBar from "./NavBarView";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import AsyncStorage from '@react-native-async-storage/async-storage';


function App() {
  AsyncStorage.setItem("log-status",false)
  AsyncStorage.setItem("log-email","")
  return (
    <>
      <>
      <MyNav />
      </>
    </>
  );
}

export default App;
