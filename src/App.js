
import './App.css';
import React, { useState } from 'react'
import Loginform from './components/Loginform';
import NavbarComponent from './components/NavbarComponent';
import Aboutpage from './pages/Aboutpage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signupform from './components/Signupform';
import Homepage from './pages/Homepage';
import Addnotepage from './pages/Addnotepage';



function App() {

  const [notes, setNotes] = useState(
    [{ title: "First Note", content: "This is first note" },
    { title: "Second Note", content: "This is Second Note" },
    { title: "Third Note", content: "This is third Note" }])

function addNote(newNoteObject){

  setNotes([...notes, newNoteObject])

}

  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route exact path="/" element={<Homepage notes={notes} addnote={setNotes}/>} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/signup" element={<Signupform />} />
          <Route path="/addnote" element={<Addnotepage notes={notes} addnote={addNote}/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
