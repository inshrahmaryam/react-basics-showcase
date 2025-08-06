// controlledform.jsx
import { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState(""); //created a state

  const handleChange = (e) => {
    setValue(e.target.value);
  };  //to run func when input changes and updates the state.

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} /> 
      {/* When the user types, onChange triggers handleChange, which updates the state. */}
      <p>Value: {value}</p>
    </div>
  );
}

export default ControlledInput; // ← Don't forget this!
 