import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import { useNotes } from '../lib/NotesProvider';
import {
  breadcrumb,
  fileUrl,
  findFirstNoteInFolder,
  findFolderByPathSegments,
  findNoteBySlug,
  formatDisplayName,
  getPrevNext,
} from '../lib/notes';
import { useDocumentMeta } from '../lib/seo';
import MarkdownRenderer from '../components/MarkdownRenderer';

const Icon: React.FC<{ icon: any; size?: number; className?: string }> = ({ icon: I, ...p }) => {
  const C = I as any;
  return <C {...p} />;
};

const NoteView: React.FC = () => {
  const params = useParams();
  const slug = params['*'] ? decodeURIComponent(params['*']) : '';
  const { index, loading: indexLoading } = useNotes();

  const note = index ? findNoteBySlug(index, slug) : undefined;
  const { prev, next } = index ? getPrevNext(index, slug) : { prev: undefined, next: undefined };

  const [content, setContent] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const crumbs = useMemo(() => (note ? breadcrumb(note.path) : []), [note]);
  const semesterLabel = crumbs.length > 0 ? formatDisplayName(crumbs[0]) : undefined;
  const courseName = crumbs.length >= 3 ? formatDisplayName(crumbs[1]) : undefined;
  const subFolders = crumbs.length > 3 ? crumbs.slice(2, -1).map(formatDisplayName) : [];

  const titleContext = [courseName, ...subFolders].filter(Boolean).join(' / ');
  const pageTitle = note ? (titleContext ? `${note.name}: ${titleContext}` : note.name) : 'Notatka';
  const pageDescription = note
    ? courseName
      ? `${note.name} z przedmiotu ${courseName}${
          subFolders.length ? ` (${subFolders.join(', ')})` : ''
        }, ${semesterLabel}. Notatki z Politechniki Poznańskiej.`
      : `Notatki: ${crumbs.map(formatDisplayName).join(' / ')}`
    : undefined;

  const breadcrumbItems = useMemo(() => {
    if (!note || !index) return [];
    const origin = window.location.origin;
    const items: { name: string; to?: string }[] = [{ name: 'PUT Notes', to: '/' }];
    for (let i = 0; i < crumbs.length - 1; i++) {
      const folder = findFolderByPathSegments(index.tree, crumbs.slice(0, i + 1));
      const target = folder ? findFirstNoteInFolder(folder) : undefined;
      items.push({
        name: formatDisplayName(crumbs[i]),
        to: target ? `/note/${target.slug}` : undefined,
      });
    }
    items.push({ name: note.name, to: `/note/${note.slug}` });
    return items.map((item) => ({
      name: item.name,
      url: `${origin}${item.to ?? `/note/${note.slug}`}`,
      to: item.to,
    }));
  }, [note, index, crumbs]);

  useDocumentMeta(pageTitle, pageDescription, breadcrumbItems);

  useEffect(() => {
    if (!note || note.type !== 'note') return;
    setStatus('loading');
    fetch(fileUrl(note.path))
      .then((res) => {
        if (!res.ok) throw new Error('not found');
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setStatus('idle');
        window.scrollTo(0, 0);
      })
      .catch(() => setStatus('error'));
  }, [note]);

  if (indexLoading) {
    return <p className="animate-pulse text-gray-500">Wczytywanie…</p>;
  }

  if (!note) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-white">Nie znaleziono notatki</h1>
        <p className="mt-3 text-gray-400">Ta notatka nie istnieje lub została przeniesiona.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
          <Icon icon={FaArrowLeft} size={12} /> Wróć na stronę główną
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
        {breadcrumbItems.slice(0, -1).map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-gray-300">
                {item.name}
              </Link>
            ) : (
              <span>{item.name}</span>
            )}
            <Icon icon={FaChevronRight} size={8} className="shrink-0 text-gray-700" />
          </span>
        ))}
        <span className="text-gray-300">{note.name}</span>
      </nav>

      {note.type === 'pdf' ? (
        <div>
          <h1 className="mb-4 text-2xl font-bold text-white">
            {note.name}
            {courseName && <span className="text-gray-500">: {[courseName, ...subFolders].join(' / ')}</span>}
          </h1>
          <iframe
            title={note.name}
            src={fileUrl(note.path)}
            className="h-[80vh] w-full rounded-xl border border-[#262626] bg-[#171717]"
          />
          <a
            href={fileUrl(note.path)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white"
          >
            Otwórz PDF w nowej karcie <Icon icon={FaExternalLinkAlt} size={11} />
          </a>
        </div>
      ) : status === 'loading' ? (
        <p className="animate-pulse text-gray-500">Wczytywanie notatki…</p>
      ) : status === 'error' ? (
        <p className="text-red-400">Nie udało się załadować notatki.</p>
      ) : (
        <MarkdownRenderer content={content} notePath={note.path} attachments={index!.attachments} />
      )}

      {(prev || next) && (
        <div className="mt-16 flex items-stretch justify-between gap-4 border-t border-[#1f1f1f] pt-6">
          {prev ? (
            <Link
              to={`/note/${prev.slug}`}
              className="group flex flex-1 flex-col rounded-lg border border-[#262626] p-4 transition-colors hover:border-[#3a3a3a]"
            >
              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <Icon icon={FaArrowLeft} size={10} /> Poprzednia
              </span>
              <span className="mt-1 truncate text-sm text-gray-300 group-hover:text-white">
                {prev.name}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {next ? (
            <Link
              to={`/note/${next.slug}`}
              className="group flex flex-1 flex-col items-end rounded-lg border border-[#262626] p-4 text-right transition-colors hover:border-[#3a3a3a]"
            >
              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                Następna <Icon icon={FaArrowRight} size={10} />
              </span>
              <span className="mt-1 truncate text-sm text-gray-300 group-hover:text-white">
                {next.name}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      )}
    </motion.article>
  );
};

export default NoteView;
