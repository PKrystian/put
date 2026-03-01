import React from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import MarkdownRenderer from '../components/MarkdownRenderer';
import PdfRenderer from '../components/PdfRenderer';
import { courses } from '../data/coursesData';
import { getDynamicCourseStructure, findFileBySlug, getNavigationInfo } from '../utils/dynamicCourseStructure';
import { FaArrowLeft, FaFileAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ArrowLeftIcon = FaArrowLeft as any;
const FileIcon = FaFileAlt as any;
const ChevronLeftIcon = FaChevronLeft as any;
const ChevronRightIcon = FaChevronRight as any;

const NoteViewPage: React.FC = () => {
  const { semesterId, courseId, category, noteId } = useParams<{
    semesterId: string;
    courseId: string;
    category: string;
    noteId: string;
  }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const course = courses.find(c => c.id === courseId);
  const courseStructure = getDynamicCourseStructure(courseId || '');

  if (!course || !courseStructure) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{t('note.courseNotFound')}</h1>
          <Link to={`/semester/${semesterId}`} className="text-blue-400 hover:text-blue-300">
            {t('note.backToCourses')}
          </Link>
        </div>
      </div>
    );
  }

  const isSylabus = location.pathname.endsWith('/sylabus') || category === 'sylabus';

  const fileInfo = !isSylabus && category && noteId
    ? findFileBySlug(courseId || '', category, noteId)
    : null;

  const categoryInfo = courseStructure.categories.find(cat => cat.slug === category);
  const categoryName = categoryInfo?.name || '';

  const displayName = isSylabus ? t('course.sylabus') : (fileInfo?.displayName || t('note.courseNotFound'));

  const filePath = isSylabus
    ? `semester-${semesterId}/${course.path}/Sylabus.md`
    : `semester-${semesterId}/${course.path}/${categoryName}/${fileInfo?.fileName || ''}`;

  const isPdf = filePath.toLowerCase().endsWith('.pdf');
  const isMarkdown = filePath.toLowerCase().endsWith('.md');

  const navInfo = !isSylabus && category && noteId
    ? getNavigationInfo(courseId || '', category, noteId)
    : { prev: null, next: null, current: 0, total: 0 };

  const goToPrev = () => {
    if (navInfo.prev) {
      navigate(`/semester/${semesterId}/${courseId}/${category}/${navInfo.prev.slug}`);
    }
  };

  const goToNext = () => {
    if (navInfo.next) {
      navigate(`/semester/${semesterId}/${courseId}/${category}/${navInfo.next.slug}`);
    }
  };

  const allCategories = courseStructure.categories;

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="hidden lg:flex flex-row">
        <Sidebar title={course.name} subtitle={`${t('common.semester')} ${semesterId}`}>
          <div className="space-y-4 mt-8">
            <Link
              to={`/semester/${semesterId}/${courseId}`}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeftIcon />
              <span>{t('nav.backToCourse')}</span>
            </Link>

            {courseStructure.hasSyllabus && (
              <div className="pt-6 border-t border-gray-800">
                <Link
                  to={`/semester/${semesterId}/${courseId}/sylabus`}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors block ${
                    isSylabus
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <FileIcon />
                    <span className="font-semibold">{t('course.sylabus')}</span>
                  </div>
                </Link>
              </div>
            )}

            <div className="pt-6 border-t border-gray-800 space-y-6">
              {allCategories.map(cat => (
                <div key={cat.name}>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2 uppercase">
                    {cat.name}
                  </h3>
                  <div className="space-y-1">
                    {cat.files.map(file => (
                      <Link
                        key={`${cat.slug}-${file.slug}`}
                        to={`/semester/${semesterId}/${courseId}/${cat.slug}/${file.slug}`}
                        className={`w-full text-left px-3 py-2 rounded transition-colors block ${
                          category === cat.slug && noteId === file.slug
                            ? 'bg-blue-900 text-white'
                            : 'hover:bg-gray-800 text-gray-300'
                        }`}
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
              to={`/semester/${semesterId}/${courseId}`}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeftIcon />
              <span>{t('nav.backToCourse')}</span>
            </Link>

            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{course.name}</h1>
                  <p className="text-gray-400">
                    {isSylabus ? t('course.sylabus') : `${categoryName} • ${displayName}`}
                  </p>
                </div>

                {!isSylabus && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={goToPrev}
                      disabled={!navInfo.prev}
                      className={`p-2 rounded-lg transition-colors ${
                        navInfo.prev
                          ? 'bg-gray-800 hover:bg-gray-700 text-white'
                          : 'bg-gray-900 text-gray-600 cursor-not-allowed'
                      }`}
                      title={t('note.previousClass')}
                    >
                      <ChevronLeftIcon />
                    </button>
                    <span className="text-sm text-gray-400">
                      {navInfo.current} / {navInfo.total}
                    </span>
                    <button
                      onClick={goToNext}
                      disabled={!navInfo.next}
                      className={`p-2 rounded-lg transition-colors ${
                        navInfo.next
                          ? 'bg-gray-800 hover:bg-gray-700 text-white'
                          : 'bg-gray-900 text-gray-600 cursor-not-allowed'
                      }`}
                      title={t('note.nextClass')}
                    >
                      <ChevronRightIcon />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              {isPdf ? (
                <PdfRenderer filePath={`/${filePath}`} />
              ) : isMarkdown ? (
                <MarkdownRenderer filePath={`/${filePath}`} />
              ) : (
                <div className="text-gray-400 text-center py-12">
                  {t('note.unsupportedFormat')}
                </div>
              )}
            </div>
          </div>
        </MainContent>
      </div>

      <div className="lg:hidden">
        <main className="p-6 max-w-screen-sm mx-auto">
          <Link
            to={`/semester/${semesterId}/${courseId}`}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeftIcon />
            <span>{t('nav.backToCourse')}</span>
          </Link>

          <h1 className="text-2xl font-bold mb-2">{course.name}</h1>
          <p className="text-gray-400 mb-6">
            {isSylabus ? t('course.sylabus') : `${categoryName} • ${displayName}`}
          </p>

          {!isSylabus && (
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-800">
              <button
                onClick={goToPrev}
                disabled={!navInfo.prev}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  navInfo.prev
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-gray-900 text-gray-600 cursor-not-allowed'
                }`}
              >
                <ChevronLeftIcon />
                <span>{t('note.previous')}</span>
              </button>
              <span className="text-sm text-gray-400">
                {navInfo.current} / {navInfo.total}
              </span>
              <button
                onClick={goToNext}
                disabled={!navInfo.next}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  navInfo.next
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-gray-900 text-gray-600 cursor-not-allowed'
                }`}
              >
                <span>{t('note.next')}</span>
                <ChevronRightIcon />
              </button>
            </div>
          )}

          {isPdf ? (
            <PdfRenderer filePath={`/${filePath}`} />
          ) : isMarkdown ? (
            <MarkdownRenderer filePath={`/${filePath}`} />
          ) : (
            <div className="text-gray-400 text-center py-12">
              {t('note.unsupportedFormat')}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default NoteViewPage;




