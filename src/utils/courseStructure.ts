const courseStructures: Record<string, { categories: string[], hasSyllabus: boolean }> = {
  'jezyk-angielski': {
    categories: ['Cwiczenia'],
    hasSyllabus: true
  },
  'ocena-efektywnosci': {
    categories: ['Wyklad'],
    hasSyllabus: true
  },
  'bhp': {
    categories: ['Wyklad'],
    hasSyllabus: true
  },
  'programowanie-aplikacji': {
    categories: ['Wyklad', 'Laboratorium'],
    hasSyllabus: true
  },
  'sieci-komputerowe': {
    categories: ['Wyklad', 'Laboratorium'],
    hasSyllabus: true
  },
  'systemy-zarzadzania': {
    categories: ['Wyklad', 'Laboratorium'],
    hasSyllabus: true
  },
  'bazy-danych': {
    categories: ['Wyklad', 'Laboratorium'],
    hasSyllabus: true
  },
  'zarzadzanie-projektami': {
    categories: ['Wyklad', 'Cwiczenia'],
    hasSyllabus: true
  },
};

export const getCourseStructure = (courseId: string) => {
  return courseStructures[courseId] || { categories: [], hasSyllabus: false };
};

export const getCategoryFiles = (courseId: string, category: string) => {
  const fileCount: Record<string, Record<string, number>> = {
    'jezyk-angielski': { 'Cwiczenia': 5 },
    'ocena-efektywnosci': { 'Wyklad': 1 },
    'bhp': { 'Wyklad': 1 },
    'programowanie-aplikacji': { 'Wyklad': 2, 'Laboratorium': 2 },
    'sieci-komputerowe': { 'Wyklad': 2, 'Laboratorium': 1 },
    'systemy-zarzadzania': { 'Wyklad': 1, 'Laboratorium': 3 },
    'bazy-danych': { 'Wyklad': 2, 'Laboratorium': 1 },
    'zarzadzanie-projektami': { 'Wyklad': 2, 'Cwiczenia': 1 },
  };

  return fileCount[courseId]?.[category] || 0;
};

