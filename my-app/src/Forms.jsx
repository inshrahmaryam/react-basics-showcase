import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page refresh
    alert(`Submitted:\nName: ${name}\nEmail: ${email}`);
    // Here you can also send data to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Form</h2>

      <label>
        Name:
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <br /><br />

      <label>
        Email:
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}
