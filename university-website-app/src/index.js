import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Nav';
import Home from './Pages/Home';
import Campus from './Pages/Campus';
import Contact from './Pages/Contact';
import Student from './Pages/Students';
import Courses from './Pages/Courses';
import About from './Pages/AboutPage';

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='campus' element={<Campus />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='student_portal' element={<Student />}/>
          <Route path='courses' element={<Courses />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
