import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import UploadPage from './pages/UploadPage';
import Home from "./pages/Home";
import FavouriteSubmission from './pages/FavouriteSubmission';
import SubmissionPage from './pages/SubmissionPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
      <Routes>


        <Route path="/" element={<Home/>}/>
        <Route path="/uploadSubmission" element={<UploadPage/>}/>
        <Route path="/favouriteSubmission" element={<FavouriteSubmission />} />
        <Route path='/SubmissionPage' element={<SubmissionPage/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
