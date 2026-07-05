function Notecard({ note }) {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>

      <p><b>Subject:</b> {note.subject}</p>

      <p><b>Semester:</b> {note.semester}</p>

      <p><b>Branch:</b> {note.branch}</p>

      <div className="card-buttons">
        <button>⬇ Download</button>
        <button>❤️ Wishlist</button>
      </div>
    </div>
  );
}

export default Notecard;