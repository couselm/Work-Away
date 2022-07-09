import defaultLocations from "./DefaultLocations";
import React, { useState } from "react";

const [notes, setNotes] = useState([ ...defaultLocations ]);

export { notes, setNotes };
