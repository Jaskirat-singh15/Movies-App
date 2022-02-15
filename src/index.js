import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Customers from "./Customers";
import Rentals from "./Rentals";
import Login from "./Login";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";

// import Test from "./Test";

// ReactDOM.render(<Test/>,document.querySelector("#root"));

ReactDOM.render(
<Router>
    <Navbar/>

    <Routes>
    <Route path = "/" element ={<App logged = {false}/> } />

    <Route path ="/customers" element = {  <Customers/> }  />

    <Route path ="/login" element ={ <Login/> } />
   
    <Route path = "/rentals" element={ <Rentals/> } />
    </Routes>
</Router>, document.getElementById("root"));
