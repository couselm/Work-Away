import React, { useState } from "react";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import defaultLocations from "./components/DefaultLocations";



function Create() {
  const [notes, setNotes] = useState([ ...defaultLocations ]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                place={noteItem}
                onDelete={deleteNote}
              />
            );
          })}
    </div>
  );
}

export default Create;
