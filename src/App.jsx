
import {useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "./App.css";


function App(){

const [page,setPage]=useState("home");


return(

<div>

<Navbar setPage={setPage}/>


{
page==="home" &&
<Home/>
}


{
page==="login" &&
<Login/>
}


{
page==="profile" &&
<Profile/>
}


</div>

)

}


export default App;