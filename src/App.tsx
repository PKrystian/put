import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotesProvider } from './lib/NotesProvider';
import Layout from './components/Layout';
import Home from './pages/Home';
import NoteView from './pages/NoteView';

function App() {
  return (
    <NotesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="note/*" element={<NoteView />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NotesProvider>
  );
}

export default App;
