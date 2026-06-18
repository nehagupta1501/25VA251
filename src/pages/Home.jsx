import {useState} from "react";

function Home(){

// const [notes,setNotes]=useState([]);
const [notes,setNotes]=useState([
{
id:1,
title:"Data Structures Notes",
subject:"CSE",
uploaded:"Neha",
downloads:120
},

{
id:2,
title:"Engineering Mathematics Unit 1",
subject:"Mathematics",
uploaded:"Rahul",
downloads:85
},

{
id:3,
title:"Digital Logic Design",
subject:"Electronics",
uploaded:"Aman",
downloads:60
},

{
id:4,
title:"Programming in C++",
subject:"CSE",
uploaded:"Priya",
downloads:150
},

{
id:5,
title:"Physics Semester 1",
subject:"Physics",
uploaded:"Karan",
downloads:70
}

]);

const [title,setTitle]=useState("");
const [subject,setSubject]=useState("");


function addNote(){

if(!title || !subject){
alert("Fill details");
return;
}


setNotes([
...notes,
{
id:Date.now(),
title,
subject
}
]);

setTitle("");
setSubject("");

}


return(

<div>


<section className="hero">

<div>

<h1>
Welcome to Campus Notes Hub 📚
</h1>

<p>
Share, Download and Manage your college notes easily
</p>


<button>
Explore Notes
</button>

</div>


<img
src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
 />

</section>




<section className="stats">

<div>
<h2>500+</h2>
<p>Students</p>
</div>

<div>
<h2>1000+</h2>
<p>Notes</p>
</div>

<div>
<h2>50+</h2>
<p>Subjects</p>
</div>


</section>





<div className="container">


<h1>Add New Note</h1>


<input
placeholder="Note title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>


<input
placeholder="Subject"
value={subject}
onChange={(e)=>setSubject(e.target.value)}
/>


<button onClick={addNote}>
Upload Note
</button>



<div className="cards">


{
notes.map(note=>(

<div className="card">


<img
src="https://cdn-icons-png.flaticon.com/512/2991/2991108.png"
/>


<h2>
{note.title}
</h2>


<p>
📌 {note.subject}
</p>

<p>
👤 Uploaded by: {note.uploaded}
</p>

<p>
⬇ Downloads: {note.downloads}
</p>

<button>
Download
</button>


</div>

))
}



</div>


</div>



<footer>

<h2>
Campus Notes Hub ❤️
</h2>

<p>
Made for college students
</p>


</footer>


</div>


)

}


export default Home;