import { NoteCategory, NotesStructure } from '../types';

const BASE_PATH = '/Users/krystian/WebstormProjects/put';

export const getNotesStructure = async (
  semester: string,
  coursePath: string
): Promise<NotesStructure> => {
  // This will be populated based on the actual file structure
  // For now, we'll return a structure based on common patterns
  const fullPath = `${BASE_PATH}/${semester}/notes/${coursePath}`;

  const categories: NoteCategory[] = [];

  // Common categories found in the notes
  const possibleCategories = ['Wyklad', 'Laboratorium', 'Cwiczenia'];

  for (const category of possibleCategories) {
    const categoryPath = `${fullPath}/${category}`;
    // In a real implementation, we would scan the directory
    // For now, we'll create a placeholder structure
    categories.push({
      name: category,
      path: category,
      files: []
    });
  }

  return {
    course: coursePath,
    syllabus: `${fullPath}/Sylabus.md`,
    categories
  };
};

export const loadMarkdownFile = async (filePath: string): Promise<string> => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error('File not found');
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown file:', error);
    return '# Error\n\nCould not load the requested file.';
  }
};

export const formatFileName = (fileName: string): string => {
  return fileName.replace('.md', '').replace(/-/g, ' ');
};

export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

