export interface Semester {
  id: number;
  name: string;
  path: string;
}

export interface Course {
  id: string;
  name: string;
  path: string;
  type: 'notes' | 'project';
  semester: number;
}

export interface NoteCategory {
  name: string;
  path: string;
  files: NoteFile[];
}

export interface NoteFile {
  name: string;
  path: string;
  fullPath: string;
}

export interface NotesStructure {
  course: string;
  syllabus?: string;
  categories: NoteCategory[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  path: string;
  semester: number;
  readme?: string;
}

