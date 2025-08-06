import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('enter text here');

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">Example textarea</label>
          <textarea
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)} // ✅ Proper controlled input
            id="myBox"
            rows="3"
          />
        </div>
      </div>
    </>
  );
}
