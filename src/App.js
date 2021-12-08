
import './App.css';
import Loginform from './components/Loginform';
import Navbar from './components/Navbar';
import Aboutpage from './pages/Aboutpage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signupform from './components/Signupform';
import Homepage from './pages/Homepage';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/signup" element={<Signupform />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
