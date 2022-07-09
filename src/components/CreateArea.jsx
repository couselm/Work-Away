import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    name: "",
    street: "",
    city: "",
    country: "",
    open: "",
    close:""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  

  function submitNote(event) {
    props.onAdd(note);
    setNote({
    name: "",
    street: "",
    city: "",
    country: "",
    open: "",
    close: ""
    });
    event.preventDefault();
    Collapse();
  }

  

  // Form Collapse Functionality

  let [expanded, setExpand] = useState(false);

  function Expand(event) {
    setExpand((expanded = true));
  }

  function Collapse(event) {
    setExpand((expanded = false));
  }


  return (
    <div>
      <form className="create-note">
        <input
          name="name"
          onChange={handleChange}
          value={note.name}
          placeholder={ expanded ? "Location Name" : "Add a New Workspace"}
          onClick={Expand}
        />
        {expanded ? (
          <div>
          <textarea
              name="imgURL"
              onChange={handleChange}
              value={note.imgURL}
              placeholder="Img URL ..."
            />
            <textarea
              name="street"
              onChange={handleChange}
              value={note.street}
              placeholder="Street ..."
            />
            <textarea
              name="city"
              onChange={handleChange}
              value={note.city}
              placeholder="City ..."
            />
            <textarea
              name="country"
              onChange={handleChange}
              value={note.country}
              placeholder="Country ..."
            />
            <label for="appt">Opens at:</label>

<input type="time" name="open"
              onChange={handleChange}
              value={note.open} required />
           
            <label for="appt">Closes at:</label>

<input type="time" name="close"
              onChange={handleChange}
              value={note.close} required />
          </div>
        ) : null}

        <Zoom in={true}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
        

        {expanded ? (
          <button className="collapse" onClick={Collapse}>
            ↑
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
