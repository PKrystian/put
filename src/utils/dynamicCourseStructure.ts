// Dynamic course structure that reads actual files from the public directory
// This will be populated by scanning the actual file structure

export interface FileInfo {
  fileName: string;      // Actual file name: "Egzamin pytania i odpowiedzi - laboratorium.md"
  displayName: string;   // Display name: "Egzamin pytania i odpowiedzi - laboratorium"
  slug: string;          // URL-friendly slug: "egzamin-pytania-i-odpowiedzi-laboratorium"
}

export interface CategoryInfo {
  name: string;          // "Laboratorium", "Wyklad", etc.
  slug: string;          // "laboratorium", "wyklad"
  files: FileInfo[];
}

export interface CourseStructureInfo {
  hasSyllabus: boolean;
  categories: CategoryInfo[];
}

// This data structure will be built dynamically by scanning the public folder
// For now, we'll hardcode it, but it should be generated from actual files
export const dynamicCourseStructures: Record<string, CourseStructureInfo> = {
  'bazy-danych': {
    hasSyllabus: true,
    categories: [
      {
        name: 'Wyklad',
        slug: 'wyklad',
        files: [
          {
            fileName: 'Zajecia 1.md',
            displayName: 'Zajęcia 1',
            slug: 'zajecia-1'
          },
          {
            fileName: 'Zajecia 2.md',
            displayName: 'Zajęcia 2',
            slug: 'zajecia-2'
          },
          {
            fileName: 'Egzamin pytania i odpowiedzi - wyklad.md',
            displayName: 'Egzamin pytania i odpowiedzi - wykład',
            slug: 'egzamin-pytania-i-odpowiedzi-wyklad'
          }
        ]
      },
      {
        name: 'Laboratorium',
        slug: 'laboratorium',
        files: [
          {
            fileName: 'Egzamin pytania i odpowiedzi - laboratorium.md',
            displayName: 'Egzamin pytania i odpowiedzi - laboratorium',
            slug: 'egzamin-pytania-i-odpowiedzi-laboratorium'
          }
        ]
      }
    ]
  },
  'jezyk-angielski': {
    hasSyllabus: true,
    categories: [
      {
        name: 'Cwiczenia',
        slug: 'cwiczenia',
        files: [
          { fileName: 'Zajecia 1.md', displayName: 'Zajęcia 1', slug: 'zajecia-1' },
          { fileName: 'Zajecia 2.md', displayName: 'Zajęcia 2', slug: 'zajecia-2' },
          { fileName: 'Zajecia 3.md', displayName: 'Zajęcia 3', slug: 'zajecia-3' },
          { fileName: 'Zajecia 4.md', displayName: 'Zajęcia 4', slug: 'zajecia-4' },
          { fileName: 'Zajecia 5.md', displayName: 'Zajęcia 5', slug: 'zajecia-5' }
        ]
      }
    ]
  },
  'ocena-efektywnosci': {
    hasSyllabus: true,
    categories: [
      {
        name: 'Wyklad',
        slug: 'wyklad',
        files: [
          { fileName: 'Zajecia 1.md', displayName: 'Zajęcia 1', slug: 'zajecia-1' }
        ]
      }
    ]
  },
  'bhp': {
    hasSyllabus: true,
    categories: [
      {
        name: 'Wyklad',
        slug: 'wyklad',
        files: [
          { fileName: 'Zajecia 1.md', displayName: 'Zajęcia 1', slug: 'zajecia-1' }
        ]
      }
    ]
  },
  'programowanie-aplikacji': {
    hasSyllabus: true,
    categories: [
      {
        name: 'Wyklad',
        slug: 'wyklad',
        files: [
          { fileName: 'Zajecia 1.md', displayName: 'Zajęcia 1', slug: 'zajecia-1' },
          { fileName: 'Zajecia 2.md', displayName: 'Zajęcia 2', slug: 'zajecia-2' }
        ]
      },
      {
        name: 'Laboratorium',
        slug: 'laboratorium',
        files: [
          { fileName: 'Zajecia 1.md', displayName: 'Zajęcia 1', slug: 'zajecia-1' },
          { fileName: 'Zajecia 2.md', displayName: 'Zajęcia 2', slug: 'zajecia-2' }
        ]
      }
    ]
  },
  'sieci-komputerowe': {
    hasSyllabus: true,
    categories: [
      {
        name: 'Wyklad',
        slug: 'wyklad',
        files: [
          { fileName: 'Zajecia 1.md', displayName: 'Zajęcia 1', slug: 'zajecia-1' },
          { fileName: 'Zajecia 2.md', displayName: 'Zajęcia 2', slug: 'zajecia-2' },
          {
            fileName: 'Egzamin pytania i odpowiedzi - wyklad.pdf',
            displayName: 'Egzamin pytania i odpowiedzi - wykład',
            slug: 'egzamin-pytania-i-odpowiedzi-wyklad'
          }
        ]
      },
      {
        name: 'Laboratorium',
        slug: 'laboratorium',
        files: [
          { fileName: 'Zajecia 1.md', displayName: 'Zajęcia 1', slug: 'zajecia-1' }
        ]
      }
    ]
  },
  'systemy-zarzadzania': {
    hasSyllabus: true,
    categories: [
      {
        name: 'Wyklad',
        slug: 'wyklad',
        files: [
          { fileName: 'Zajecia 1.md', displayName: 'Zajęcia 1', slug: 'zajecia-1' }
        ]
      },
      {
        name: 'Laboratorium',
        slug: 'laboratorium',
        files: [
          { fileName: 'Zajecia 1.md', displayName: 'Zajęcia 1', slug: 'zajecia-1' },
          { fileName: 'Zajecia 2.md', displayName: 'Zajęcia 2', slug: 'zajecia-2' },
          { fileName: 'Zajecia 3.md', displayName: 'Zajęcia 3', slug: 'zajecia-3' }
        ]
      }
    ]
  },
  'zarzadzanie-projektami': {
    hasSyllabus: true,
    categories: [
      {
        name: 'Wyklad',
        slug: 'wyklad',
        files: [
          { fileName: 'Zajecia 1.md', displayName: 'Zajęcia 1', slug: 'zajecia-1' },
          { fileName: 'Zajecia 2.md', displayName: 'Zajęcia 2', slug: 'zajecia-2' }
        ]
      },
      {
        name: 'Cwiczenia',
        slug: 'cwiczenia',
        files: [
          { fileName: 'Zajecia 1.md', displayName: 'Zajęcia 1', slug: 'zajecia-1' }
        ]
      }
    ]
  }
};

// Get dynamic course structure
export const getDynamicCourseStructure = (courseId: string): CourseStructureInfo | null => {
  return dynamicCourseStructures[courseId] || null;
};

// Find a specific file by category and slug
export const findFileBySlug = (
  courseId: string,
  categorySlug: string,
  fileSlug: string
): FileInfo | null => {
  const structure = getDynamicCourseStructure(courseId);
  if (!structure) return null;

  const category = structure.categories.find(cat => cat.slug === categorySlug);
  if (!category) return null;

  return category.files.find(file => file.slug === fileSlug) || null;
};

// Get navigation info (prev/next files in a category)
export const getNavigationInfo = (
  courseId: string,
  categorySlug: string,
  fileSlug: string
): { prev: FileInfo | null; next: FileInfo | null; current: number; total: number } => {
  const structure = getDynamicCourseStructure(courseId);
  if (!structure) return { prev: null, next: null, current: 0, total: 0 };

  const category = structure.categories.find(cat => cat.slug === categorySlug);
  if (!category) return { prev: null, next: null, current: 0, total: 0 };

  const currentIndex = category.files.findIndex(file => file.slug === fileSlug);
  if (currentIndex === -1) return { prev: null, next: null, current: 0, total: category.files.length };

  return {
    prev: currentIndex > 0 ? category.files[currentIndex - 1] : null,
    next: currentIndex < category.files.length - 1 ? category.files[currentIndex + 1] : null,
    current: currentIndex + 1,
    total: category.files.length
  };
};

