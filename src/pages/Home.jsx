import { useState } from "react";
import Hero from "../components/Hero";
import Searchbar from "../components/Searchbar";
import Notecard from "../components/Notecard";

function Home() {

const notes = [

{
title:"DBMS Notes",
subject:"Database",
semester:"3",
branch:"CSE"
},

{
title:"DSA Notes",
subject:"Data Structures",
semester:"2",
branch:"CSE"
},

{
title:"Operating System",
subject:"OS",
semester:"4",
branch:"CSE"
},

{
title:"Computer Networks",
subject:"CN",
semester:"5",
branch:"CSE"
},

{
title:"Java Programming",
subject:"Java",
semester:"3",
branch:"CSE"
},

{
title:"Python Notes",
subject:"Python",
semester:"2",
branch:"CSE"
}

];

const [search,setSearch]=useState("");

const filtered=notes.filter(note=>

note.title.toLowerCase().includes(search.toLowerCase()) ||

note.subject.toLowerCase().includes(search.toLowerCase())

);

return(

<>

<Hero/>

<Searchbar onSearch={setSearch}/>

<div className="category-section">

<h2>📂 Categories</h2>

<div className="categories">

<div>CSE</div>

<div>IT</div>

<div>ECE</div>

<div>ME</div>

<div>CE</div>

<div>EE</div>

</div>

</div>

<h2 className="latest-title">Latest Notes</h2>

<div className="notes-grid">

{

filtered.map((note,index)=>

<Notecard key={index} note={note}/>

)

}

</div>

</>

)

}

export default Home;