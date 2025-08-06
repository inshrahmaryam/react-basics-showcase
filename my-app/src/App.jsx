import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

import Navbar from './components/Navbar';
import Greeting from './Greeting';
import TextForm from './components/TextForm';
import ContactForm from './Forms.jsx';
import ControlledInput from "./ControlledForm"; 
import NoteState from './context/notes/NoteState.js';
import About from './About.js';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// ✅ Todo component
function Todo({ todo }) {
  return (
    <div className="todo">
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <hr />
    </div>
  );
}

// ✅ Hook Counter component
function Hooks() {
  const [count, setCount] = useState(101);

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </>
  );
}

// ✅ App Component
function App() {
  const [showbtn, setshowbtn] = useState(true);

  const [todos, setTodos] = useState([
    { title: "hey", desc: "i am a good todo" },
    { title: "hello", desc: "i aint a good todo" },
    { title: "hiya", desc: "the worst todo" }
  ]);

  return (
    <NoteState>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" />

        <div className="container my-3">
          {/* ✅ Routing */}
          <Routes>
            <Route
              path="/my-app"
              element={<div>This is the /my-app route!</div>}
            />
            {/* You can add more routes like Contact or About */}
          </Routes>

          {/* ✅ Hook Counter */}
          <div className="card">
            <h2>Hook Counter</h2>
            <Hooks />
          </div>

          {/* ✅ TextForm */}
          <TextForm heading="Enter the text to analyze" />

          {/* ✅ Greeting */}
          <Greeting name="Inshrah" />
<About />

          <h1>React</h1>

          {/* ✅ Conditional Rendering */}
          {showbtn ? (
            <button>shown only when 2nd button is clicked.</button>
          ) : (
            "nothingy!!"
          )}

          <div className="card">
            <button onClick={() => setshowbtn(!showbtn)}>
              toggle button visibility
            </button>

            {todos.map((todo, index) => (
              <Todo key={index} todo={todo} />
            ))}
          </div>

          {/* ✅ Controlled Component */}
          <div>
            <h1>Controlled Component Demo</h1>
            <ControlledInput />
          </div>

          {/* ✅ Contact Form */}
          <div>
            <h1>Welcome to My App</h1>
            <ContactForm />
          </div>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;

