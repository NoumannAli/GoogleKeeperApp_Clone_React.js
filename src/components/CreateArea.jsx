import React, { useState } from "react";

//Main function of CreateArea.jsx
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // Function to store value of inputs
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  //Add new Note using props.onAdd from App.jsx
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
//returing HTML form and text area
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}
//exporting CreateArea function
export default CreateArea;
