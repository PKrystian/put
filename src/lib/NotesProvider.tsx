import React, { createContext, useContext, useEffect, useState } from 'react';
import { loadNotesIndex, NotesIndex } from './notes';

interface NotesState {
  index: NotesIndex | null;
  loading: boolean;
  error: string | null;
}

const NotesContext = createContext<NotesState>({ index: null, loading: true, error: null });

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<NotesState>({ index: null, loading: true, error: null });

  useEffect(() => {
    let active = true;
    loadNotesIndex()
      .then((index) => active && setState({ index, loading: false, error: null }))
      .catch((err) =>
        active && setState({ index: null, loading: false, error: String(err.message || err) })
      );
    return () => {
      active = false;
    };
  }, []);

  return <NotesContext.Provider value={state}>{children}</NotesContext.Provider>;
};

export const useNotes = () => useContext(NotesContext);
