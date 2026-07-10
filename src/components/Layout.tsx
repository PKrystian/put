import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Sidebar from './Sidebar';

const Icon: React.FC<{ icon: any; size?: number }> = ({ icon: I, ...p }) => {
  const C = I as any;
  return <C {...p} />;
};

const SIDEBAR_W = 'w-[300px]';

const Layout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <aside
        className={`fixed left-0 top-0 z-30 hidden h-screen ${SIDEBAR_W} border-r border-[#1f1f1f] bg-[#0f0f0f] lg:block`}
      >
        <Sidebar />
      </aside>

      <header className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between border-b border-[#1f1f1f] bg-[#0f0f0f]/95 px-4 py-3 backdrop-blur lg:hidden">
        <Link to="/" className="text-lg font-bold text-white">
          PUT Notes
        </Link>
        <button
          aria-label="Przełącz nawigację"
          onClick={() => setMobileOpen((o) => !o)}
          className="rounded-md p-2 text-gray-300 hover:bg-white/10 hover:text-white"
        >
          <Icon icon={mobileOpen ? FaTimes : FaBars} size={18} />
        </button>
      </header>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-30 bg-black/60 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <aside
            className={`fixed left-0 top-0 z-40 h-screen ${SIDEBAR_W} max-w-[85vw] border-r border-[#1f1f1f] bg-[#0f0f0f] lg:hidden`}
          >
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </aside>
        </>
      )}

      <main className="lg:pl-[300px]">
        <div className="mx-auto max-w-3xl px-5 pb-24 pt-20 sm:px-8 lg:pt-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
