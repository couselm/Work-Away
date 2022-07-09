import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import Grow from "@mui/material/Grow";

function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }}>
    <div className="note" >
      <h3>{props.place.name}</h3>
      <img src={props.place.imgURL} alt={props.place.name} />
      <p>Address: {props.place.street}</p>
      <p>City: {props.place.city}</p>
      <p>Country: {props.place.country}</p>
      <p>Hours: {props.place.open + " - " + props.place.close}</p>
          <Fab onClick={handleClick}>
            <DeleteIcon />
          </Fab>
    </div>
    </Grow>
  );
}

export default Note;
