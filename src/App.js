import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Sidenav from './components/Sidenav';
import Overview from './pages/Overview';
import AddQuestions from './pages/AddQuestions';
import EditQuestions from './pages/EditQuestions';
import GeneratePaper from './pages/GeneratePaper';
import Questions from './pages/Questions';
import DeleteCourse from './pages/DeleteCourse';
import AddCourse from './pages/AddCourse';
import './App.css'
import DeleteQuestions from './pages/DeleteQuestions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='dashboard' element={<Sidenav />}>
          <Route index element={<Overview />} />
          <Route path='course' element={<AddCourse />} />
          <Route path='course:deleteCourse' element={<DeleteCourse />} />
          <Route path='add' element={<AddQuestions />} />
          <Route path='delete:deleteQuestion' element={<DeleteQuestions />} />
          <Route path='edit:editQuestion' element={<EditQuestions />} />
          <Route path='view' element={<Questions />} />
          <Route path='generate' element={<GeneratePaper />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;