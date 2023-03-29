import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import UploadPage from './pages/UploadPage';
import Home from "./pages/Home";
import FavouriteSubmission from './pages/FavouriteSubmission';
import SubmissionPage from './pages/SubmissionPage';
import SubmissionEdit from './pages/SubmissionEdit';

function App() {
  return (
    <>
      <Router>
        <Navbar />
      <Routes>


        <Route path="/" element={<Home/>}/>
        <Route path="/uploadSubmission" element={<UploadPage/>}/>
        <Route path="/favouriteSubmission" element={<FavouriteSubmission />} />
        <Route path='/SubmissionPage/:id' element={<SubmissionPage/>} />
        <Route path='/SubmissionEdit/:id' element={<SubmissionEdit/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
