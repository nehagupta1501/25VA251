function Navbar({setPage}){


return(

<nav>

<h2>📚 Campus Notes Hub</h2>


<div>

<button onClick={()=>setPage("home")}>
Home
</button>


<button onClick={()=>setPage("profile")}>
Profile
</button>


<button onClick={()=>setPage("login")}>
Login
</button>


</div>


</nav>

)

}


export default Navbar;