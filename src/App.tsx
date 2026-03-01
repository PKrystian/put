import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SemesterPage from './pages/SemesterPage';
import CoursePage from './pages/CoursePage';
import NoteViewPage from './pages/NoteViewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/semester/:semesterId" element={<SemesterPage />} />

        <Route
          path="/semester/:semesterId/course/:courseId"
          element={<Navigate to={window.location.pathname.replace('/course/', '/')} replace />}
        />

        <Route path="/semester/:semesterId/:courseId" element={<CoursePage />} />
        <Route path="/semester/:semesterId/:courseId/sylabus" element={<NoteViewPage />} />
        <Route path="/semester/:semesterId/:courseId/:category/:noteId" element={<NoteViewPage />} />
      </Routes>
    </Router>
  );
}

export default App;

