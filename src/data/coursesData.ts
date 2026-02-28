import { Semester, Course } from '../types';

export const semesters: Semester[] = [
  { id: 1, name: 'Semestr 1', path: 'semester-1' },
  { id: 2, name: 'Semestr 2', path: 'semester-2' },
  { id: 3, name: 'Semestr 3', path: 'semester-3' },
  { id: 4, name: 'Semestr 4', path: 'semester-4' },
];

export const courses: Course[] = [
  {
    id: 'jezyk-angielski',
    name: 'Język angielski',
    path: 'Jezyk angielski',
    type: 'notes',
    semester: 1,
  },
  {
    id: 'ocena-efektywnosci',
    name: 'Ocena efektywności systemów komputerowych',
    path: 'Ocena efektywnosci systemow komputerowych',
    type: 'notes',
    semester: 1,
  },
  {
    id: 'bhp',
    name: 'Podstawowe szkolenie z zakresu BHP',
    path: 'Podstawowe szkolenie z zakresu BHP',
    type: 'notes',
    semester: 1,
  },
  {
    id: 'programowanie-aplikacji',
    name: 'Programowanie aplikacji internetowych',
    path: 'Programowanie aplikacji internetowych',
    type: 'notes',
    semester: 1,
  },
  {
    id: 'sieci-komputerowe',
    name: 'Sieci komputerowe',
    path: 'Sieci komputerowe',
    type: 'notes',
    semester: 1,
  },
  {
    id: 'systemy-zarzadzania',
    name: 'Systemy zarządzania treścią',
    path: 'Systemy zarzadzania trescia',
    type: 'notes',
    semester: 1,
  },
  {
    id: 'bazy-danych',
    name: 'Zaawansowane technologie baz danych',
    path: 'Zaawansowane technologie baz danych',
    type: 'notes',
    semester: 1,
  },
  {
    id: 'zarzadzanie-projektami',
    name: 'Zarządzanie projektami',
    path: 'Zarzadzanie projektami',
    type: 'notes',
    semester: 1,
  },
  {
    id: 'put-survivors',
    name: 'PUT Survivors',
    path: 'put-survivors',
    type: 'project',
    semester: 1,
  },
];

