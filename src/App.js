
import './App.css';
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



function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
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
