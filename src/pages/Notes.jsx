import notes from "../data/notes";
import NoteCard from "../components/Notecard";

function Notes(){

return(

<div className="notes-page">

<h1>All Notes</h1>

<div className="notes-grid">

{

notes.map(note=>

<NoteCard key={note.id} note={note}/>

)

}

</div>
<div className="card-buttons">

<button>❤️ Wishlist</button>

<button>👁 View</button>

<button>⬇ Download</button>

</div>

</div>

)

}

export default Notes;