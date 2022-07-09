import Note from "./Note";
import { notes } from "./PlacesDB"

function PlacesGrid() {
    return (
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

    )
}