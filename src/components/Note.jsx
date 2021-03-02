import React from "react";
//Function to delete note by its ID
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
//returning Note with title and content using props.title and props.content from App.jsx.
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>x</button>
    </div>
  );
}
//exporting Note function
export default Note;
