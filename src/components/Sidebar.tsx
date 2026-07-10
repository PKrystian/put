import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaChevronRight,
  FaExternalLinkAlt,
  FaFileAlt,
  FaFilePdf,
  FaGithub,
  FaSearch,
} from 'react-icons/fa';
import { fileUrl, formatDisplayName, TreeFolder, TreeNode, TreeProject } from '../lib/notes';
import { useNotes } from '../lib/NotesProvider';
import pkg from '../../package.json';

const Icon: React.FC<{ icon: any; className?: string; size?: number }> = ({ icon: I, ...p }) => {
  const C = I as any;
  return <C {...p} />;
};

function matchesQuery(node: TreeNode, q: string): boolean {
  if (node.type === 'folder') return node.children.some((c) => matchesQuery(c, q));
  if (node.name.toLowerCase().includes(q)) return true;
  if (node.type === 'note' || node.type === 'pdf') {
    return (node.headings ?? []).some((h) => h.toLowerCase().includes(q));
  }
  return false;
}

const ProjectLink: React.FC<{ node: TreeProject; depth: number }> = ({ node, depth }) => (
  <a
    href={fileUrl(node.entryPath)}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-md py-1.5 pr-2 text-sm text-gray-400 transition-colors hover:bg-white/5 hover:text-gray-200"
    style={{ paddingLeft: `${depth * 14 + 10}px` }}
  >
    <Icon icon={FaExternalLinkAlt} size={12} className="shrink-0 opacity-70" />
    <span className="truncate">{node.name}</span>
  </a>
);

const NoteLink: React.FC<{ node: Exclude<TreeNode, TreeFolder | TreeProject>; depth: number }> = ({
  node,
  depth,
}) => {
  const location = useLocation();
  const ref = useRef<HTMLAnchorElement>(null);
  const to = `/note/${node.slug}`;
  const active = decodeURIComponent(location.pathname) === to;

  useEffect(() => {
    if (active) ref.current?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  return (
    <Link
      ref={ref}
      to={to}
      className={`flex items-center gap-2 rounded-md py-1.5 pr-2 text-sm transition-colors ${
        active
          ? 'bg-white/10 text-white'
          : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
      }`}
      style={{ paddingLeft: `${depth * 14 + 10}px` }}
    >
      <Icon
        icon={node.type === 'pdf' ? FaFilePdf : FaFileAlt}
        size={12}
        className="shrink-0 opacity-70"
      />
      <span className="truncate">{node.name}</span>
    </Link>
  );
};

const Folder: React.FC<{
  node: TreeFolder;
  depth: number;
  query: string;
  activeAncestorSlugs: Set<string>;
}> = ({ node, depth, query, activeAncestorSlugs }) => {
  const [manualOverride, setManualOverride] = useState<boolean | null>(null);
  const autoExpanded = depth < 1 || !!query || activeAncestorSlugs.has(node.slug);
  const expanded = manualOverride ?? autoExpanded;

  useEffect(() => {
    setManualOverride(null);
  }, [activeAncestorSlugs]);

  return (
    <div>
      <button
        onClick={() => setManualOverride(!expanded)}
        className="flex w-full items-center gap-1.5 rounded-md py-1.5 pr-2 text-left text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
        style={{ paddingLeft: `${depth * 14 + 6}px` }}
      >
        <Icon
          icon={FaChevronRight}
          size={10}
          className={`shrink-0 transition-transform ${expanded ? 'rotate-90' : ''}`}
        />
        <span className="truncate">{formatDisplayName(node.name)}</span>
      </button>
      {expanded && (
        <div>
          {node.children
            .filter((c) => !query || matchesQuery(c, query))
            .map((child) =>
              child.type === 'folder' ? (
                <Folder
                  key={child.slug}
                  node={child}
                  depth={depth + 1}
                  query={query}
                  activeAncestorSlugs={activeAncestorSlugs}
                />
              ) : child.type === 'project' ? (
                <ProjectLink key={child.slug} node={child} depth={depth + 1} />
              ) : (
                <NoteLink key={child.slug} node={child} depth={depth + 1} />
              )
            )}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC<{ onNavigate?: () => void }> = ({ onNavigate }) => {
  const { index, loading } = useNotes();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();

  const tree = useMemo(() => index?.tree ?? [], [index]);

  const activeAncestorSlugs = useMemo(() => {
    const set = new Set<string>();
    const match = /^\/note\/(.+)$/.exec(decodeURIComponent(location.pathname));
    if (!match) return set;
    const parts = match[1].split('/');
    for (let i = 1; i < parts.length; i++) {
      set.add(parts.slice(0, i).join('/'));
    }
    return set;
  }, [location.pathname]);

  return (
    <div className="flex h-full flex-col" onClick={() => onNavigate?.()}>
      <div className="px-5 pt-6">
        <Link to="/" className="group inline-flex items-center gap-2">
          <img
            src={`${process.env.PUBLIC_URL}/PUT-logo.png`}
            alt=""
            className="h-7 w-7 shrink-0 rounded-md object-cover"
          />
          <span className="text-xl font-bold text-white">PUT Notes</span>
        </Link>
      </div>

      <div className="px-4 pt-5">
        <div className="flex items-center gap-2 rounded-lg border border-[#262626] bg-[#171717] px-3 py-2">
          <Icon icon={FaSearch} size={12} className="text-gray-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            placeholder="Szukaj notatek…"
            className="w-full bg-transparent text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none"
          />
        </div>
      </div>

      <nav className="mt-3 flex-1 overflow-y-auto px-3 pb-6">
        {loading && <p className="px-3 py-2 text-sm text-gray-500">Wczytywanie…</p>}
        {!loading &&
          tree
            .filter((c) => !q || matchesQuery(c, q))
            .map((node) =>
              node.type === 'folder' ? (
                <Folder
                  key={node.slug}
                  node={node}
                  depth={0}
                  query={q}
                  activeAncestorSlugs={activeAncestorSlugs}
                />
              ) : node.type === 'project' ? (
                <ProjectLink key={node.slug} node={node} depth={0} />
              ) : (
                <NoteLink key={node.slug} node={node} depth={0} />
              )
            )}
        {!loading && q && !tree.some((c) => matchesQuery(c, q)) && (
          <p className="px-3 py-2 text-sm text-gray-600">Brak wyników.</p>
        )}
      </nav>

      <div className="border-t border-[#1f1f1f] px-5 py-4">
        <a
          href="https://github.com/PKrystian/put"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
        >
          <Icon icon={FaGithub} size={16} />
          github.com/PKrystian/put
        </a>
        <a
          href="https://www.krystianpinczak.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-gray-600 transition-colors hover:text-white"
        >
          <span className="block text-xs">Krystian Pińczak</span>
          <span className="block text-[10px] text-gray-700">
            © {new Date().getFullYear()} All rights reserved
          </span>
        </a>
        <p className="mt-2 text-[10px] text-gray-700">v{pkg.version}</p>
      </div>
    </div>
  );
};

export default Sidebar;
