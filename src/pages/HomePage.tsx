import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import { semesters } from '../data/coursesData';
import { FaBook, FaGraduationCap } from 'react-icons/fa';

const GraduationIcon = FaGraduationCap as any;
const BookIcon = FaBook as any;

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="hidden lg:flex flex-row">
        <Sidebar
          title="PUT Notes"
          subtitle="Notatki z Politechniki Poznańskiej"
        >
          <div className="space-y-4 mt-8">
            <div className="text-gray-300">
              <p className="mb-4">
                Witaj w repozytorium notatek studenckich z Politechniki Poznańskiej!
              </p>
              <p className="text-sm text-gray-400">
                Ta strona zawiera zebrane notatki z wykładów, laboratoriów i ćwiczeń,
                które mogą być pomocne dla obecnych i przyszłych studentów.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">SZYBKI DOSTĘP</h3>
              <div className="space-y-2">
                {semesters.map(semester => (
                  <Link
                    key={semester.id}
                    to={`/semester/${semester.id}`}
                    className="block px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <GraduationIcon className="text-blue-400" />
                      <span>{semester.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Sidebar>

        <MainContent>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Wybierz semestr</h2>
              <p className="text-gray-400 mb-8">
                Wybierz semestr, aby zobaczyć dostępne przedmioty i notatki.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {semesters.map(semester => (
                <Link
                  key={semester.id}
                  to={`/semester/${semester.id}`}
                  className="block p-8 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 border border-gray-800 hover:border-gray-700 rounded-xl transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <GraduationIcon className="text-4xl text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <svg
                      className="w-6 h-6 text-gray-600 group-hover:text-gray-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {semester.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Kliknij, aby zobaczyć przedmioty i projekty
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-900/20 border border-blue-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <BookIcon className="text-blue-400" />
                O projekcie
              </h3>
              <div className="text-gray-300 space-y-2 text-sm">
                <p>
                  To repozytorium zawiera notatki z zajęć na Politechnice Poznańskiej,
                  spisane w formacie Markdown.
                </p>
                <p>
                  Wszystkie notatki są dostępne dla studentów i mają na celu ułatwienie
                  nauki oraz przygotowania do egzaminów.
                </p>
                <p className="text-gray-400 mt-4">
                  Notatki są regularnie aktualizowane i rozszerzane.
                </p>
              </div>
            </div>
          </div>
        </MainContent>
      </div>

      <div className="lg:hidden">
        <main className="p-6 max-w-screen-sm mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">PUT Notes</h1>
            <p className="text-gray-400">Notatki z Politechniki Poznańskiej</p>
          </div>

          <div className="mb-8">
            <p className="text-gray-300 mb-4">
              Witaj w repozytorium notatek studenckich z Politechniki Poznańskiej!
            </p>
            <p className="text-sm text-gray-400">
              Ta strona zawiera zebrane notatki z wykładów, laboratoriów i ćwiczeń.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Semestry</h2>
            {semesters.map(semester => (
              <Link
                key={semester.id}
                to={`/semester/${semester.id}`}
                className="block p-6 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-lg transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <GraduationIcon className="text-2xl text-blue-400" />
                    <span className="text-lg font-semibold">{semester.name}</span>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;



