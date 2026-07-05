function Upload() {
  return (
    <div className="upload-page">
      <h1>📤 Upload Notes</h1>

      <form className="upload-form">

        <input type="text" placeholder="Title" />

        <input type="text" placeholder="Subject" />

        <input type="text" placeholder="Semester" />

        <input type="text" placeholder="Branch" />

        <textarea placeholder="Description"></textarea>

        <input type="file" />

        <button>Upload</button>

      </form>
    </div>
  );
}

export default Upload;