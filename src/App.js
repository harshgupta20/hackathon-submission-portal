import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import UploadPage from './pages/UploadPage';
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Router>
        <Navbar />
      <Routes>


        <Route path="/" element={<Home/>}/>
        <Route path="/uploadSubmission" element={<UploadPage/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
