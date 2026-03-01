import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Card from '../components/Card';
import { semesters, courses } from '../data/coursesData';
import { FaBook, FaGamepad, FaArrowLeft } from 'react-icons/fa';

const BookIcon = FaBook as any;
const GamepadIcon = FaGamepad as any;
const ArrowLeftIcon = FaArrowLeft as any;

const SemesterPage: React.FC = () => {
  const { semesterId } = useParams<{ semesterId: string }>();
  const semester = semesters.find(s => s.id === parseInt(semesterId || '1'));
  const semesterCourses = courses.filter(c => c.semester === parseInt(semesterId || '1'));

  const noteCourses = semesterCourses.filter(c => c.type === 'notes');
  const projects = semesterCourses.filter(c => c.type === 'project');

  if (!semester) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Nie znaleziono semestru</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Wróć do strony głównej
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="hidden lg:flex flex-row">
        <Sidebar
          title={semester.name}
          subtitle="Przedmioty i projekty"
        >
          <div className="space-y-4 mt-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeftIcon />
              <span>Powrót do listy semestrów</span>
            </Link>

            <div className="pt-6 border-t border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">PRZEDMIOTY ({noteCourses.length})</h3>
              <div className="space-y-1 text-sm text-gray-300">
                {noteCourses.map(course => (
                  <Link
                    key={course.id}
                    to={`/semester/${semesterId}/${course.id}`}
                    className="block px-3 py-2 rounded hover:bg-gray-800 transition-colors"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </div>

            {projects.length > 0 && (
              <div className="pt-6 border-t border-gray-800">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">PROJEKTY ({projects.length})</h3>
                <div className="space-y-1 text-sm text-gray-300">
                  {projects.map(project => (
                    <Link
                      key={project.id}
                      to={`/semester/${semesterId}/${project.id}`}
                      className="block px-3 py-2 rounded hover:bg-gray-800 transition-colors"
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Sidebar>

        <MainContent>
          <div className="space-y-8">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
              >
                <ArrowLeftIcon />
                <span>Wszystkie semestry</span>
              </Link>
              <h2 className="text-3xl font-bold mb-2">{semester.name}</h2>
              <p className="text-gray-400">
                Wybierz przedmiot lub projekt, aby zobaczyć notatki i materiały.
              </p>
            </div>

            {noteCourses.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <BookIcon className="text-blue-400" />
                  Przedmioty
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {noteCourses.map(course => (
                    <Card
                      key={course.id}
                      title={course.name}
                      description="Notatki z wykładów, laboratoriów i ćwiczeń"
                      link={`/semester/${semesterId}/${course.id}`}
                      icon={<BookIcon />}
                    />
                  ))}
                </div>
              </div>
            )}

            {projects.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <GamepadIcon className="text-green-400" />
                  Projekty
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {projects.map(project => (
                    <Card
                      key={project.id}
                      title={project.name}
                      description="Projekt realizowany w ramach zajęć"
                      link={`/semester/${semesterId}/${project.id}`}
                      badge="Projekt"
                      icon={<GamepadIcon />}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </MainContent>
      </div>

      <div className="lg:hidden">
        <main className="p-6 max-w-screen-sm mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeftIcon />
            <span>Wszystkie semestry</span>
          </Link>

          <h1 className="text-3xl font-bold mb-2">{semester.name}</h1>
          <p className="text-gray-400 mb-8">
            Wybierz przedmiot lub projekt
          </p>

          {noteCourses.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Przedmioty</h2>
              <div className="space-y-3">
                {noteCourses.map(course => (
                  <Card
                    key={course.id}
                    title={course.name}
                    link={`/semester/${semesterId}/${course.id}`}
                    icon={<BookIcon />}
                  />
                ))}
              </div>
            </div>
          )}

          {projects.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Projekty</h2>
              <div className="space-y-3">
                {projects.map(project => (
                  <Card
                    key={project.id}
                    title={project.name}
                    link={`/semester/${semesterId}/${project.id}`}
                    badge="Projekt"
                    icon={<GamepadIcon />}
                  />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SemesterPage;





