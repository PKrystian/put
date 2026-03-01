import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import { courses } from '../data/coursesData';
import { getDynamicCourseStructure, CategoryInfo } from '../utils/dynamicCourseStructure';
import { FaArrowLeft, FaFileAlt } from 'react-icons/fa';

const ArrowLeftIcon = FaArrowLeft as any;
const FileIcon = FaFileAlt as any;

const CoursePage: React.FC = () => {
  const { semesterId, courseId } = useParams<{ semesterId: string; courseId: string }>();
  const course = courses.find(c => c.id === courseId);
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const [hasSyllabus, setHasSyllabus] = useState(false);

  useEffect(() => {
    if (course && courseId) {
      const courseStructure = getDynamicCourseStructure(courseId);

      if (courseStructure && courseStructure.categories.length > 0) {
        setCategories(courseStructure.categories);
        setHasSyllabus(courseStructure.hasSyllabus);
      }
    }
  }, [course, semesterId, courseId]);

  if (!course) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Nie znaleziono przedmiotu</h1>
          <Link to={`/semester/${semesterId}`} className="text-blue-400 hover:text-blue-300">
            Wróć do listy przedmiotów
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="hidden lg:flex flex-row">
        <Sidebar title={course.name} subtitle={`Semestr ${semesterId}`}>
          <div className="space-y-4 mt-8">
            <Link
              to={`/semester/${semesterId}`}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeftIcon />
              <span>Powrót do semestru</span>
            </Link>

            {hasSyllabus && (
              <div className="pt-6 border-t border-gray-800">
                <Link
                  to={`/semester/${semesterId}/${courseId}/sylabus`}
                  className="w-full text-left px-4 py-3 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 transition-colors block"
                >
                  <div className="flex items-center gap-2">
                    <FileIcon />
                    <span className="font-semibold">Sylabus</span>
                  </div>
                </Link>
              </div>
            )}

            <div className="pt-6 border-t border-gray-800 space-y-6">
              {categories.map(category => (
                <div key={category.slug}>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2 uppercase">
                    {category.name}
                  </h3>
                  <div className="space-y-1">
                    {category.files.map(file => (
                      <Link
                        key={file.slug}
                        to={`/semester/${semesterId}/${courseId}/${category.slug}/${file.slug}`}
                        className="w-full text-left px-3 py-2 rounded transition-colors block hover:bg-gray-800 text-gray-300"
                      >
                        <div className="flex items-center gap-2">
                          <FileIcon className="text-sm" />
                          <span className="text-sm">{file.displayName}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Sidebar>

        <MainContent>
          <div>
            <Link
              to={`/semester/${semesterId}`}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeftIcon />
              <span>Wróć do semestru {semesterId}</span>
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">{course.name}</h1>
              <p className="text-gray-400">
                Wybierz kategorię i zajęcia, aby zobaczyć notatki
              </p>
            </div>

            {hasSyllabus && (
              <div className="mb-8">
                <Link
                  to={`/semester/${semesterId}/${courseId}/sylabus`}
                  className="block p-6 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 rounded-lg transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FileIcon className="text-2xl text-blue-400" />
                    <h3 className="text-xl font-semibold">Sylabus</h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Informacje o przedmiocie, programie i zasadach zaliczenia
                  </p>
                </Link>
              </div>
            )}

            <div className="space-y-8">
              {categories.map(category => (
                <div key={category.slug}>
                  <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.files.map(file => (
                      <Link
                        key={file.slug}
                        to={`/semester/${semesterId}/${courseId}/${category.slug}/${file.slug}`}
                        className="block p-6 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 rounded-lg transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-3">
                          <FileIcon className="text-xl text-gray-400 group-hover:text-blue-400 transition-colors" />
                          <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                            {file.displayName}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MainContent>
      </div>

      <div className="lg:hidden">
        <main className="p-6 max-w-screen-sm mx-auto">
          <Link
            to={`/semester/${semesterId}`}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeftIcon />
            <span>Powrót do semestru</span>
          </Link>

          <h1 className="text-2xl font-bold mb-2">{course.name}</h1>
          <p className="text-gray-400 mb-6">Wybierz zajęcia</p>

          {hasSyllabus && (
            <div className="mb-6">
              <Link
                to={`/semester/${semesterId}/${courseId}/sylabus`}
                className="block px-4 py-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-2">
                  <FileIcon />
                  <span className="font-semibold">Sylabus</span>
                </div>
              </Link>
            </div>
          )}

          <div className="space-y-6">
            {categories.map(category => (
              <div key={category.slug}>
                <h3 className="text-lg font-semibold mb-3">{category.name}</h3>
                <div className="space-y-2">
                  {category.files.map(file => (
                    <Link
                      key={file.slug}
                      to={`/semester/${semesterId}/${courseId}/${category.slug}/${file.slug}`}
                      className="block px-4 py-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <FileIcon />
                        <span>{file.displayName}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoursePage;

