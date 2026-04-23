import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

const AppLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* TopAppBar */}
      <header className="bg-[#F4F7F9] dark:bg-slate-900 border-b border-[#D1D9E0] dark:border-slate-800 flex justify-between items-center w-full px-4 h-14 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button className="text-[#4A5D7E] dark:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors p-1 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="font-public-sans text-sm font-semibold tracking-tight text-lg text-[#4A5D7E] dark:text-white tracking-widest uppercase">
            OSHA Compliance
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 mr-4">
            <NavLink to="/" className={({isActive}) => isActive ? "text-[#4A5D7E] dark:text-blue-400 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-3 py-1 rounded" : "text-slate-500 dark:text-slate-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-3 py-1 rounded"}>
              Workplaces
            </NavLink>
            <NavLink to="/workers" className={({isActive}) => isActive ? "text-[#4A5D7E] dark:text-blue-400 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-3 py-1 rounded" : "text-slate-500 dark:text-slate-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-3 py-1 rounded"}>
              Workers
            </NavLink>
            <NavLink to="/trainings" className={({isActive}) => isActive ? "text-[#4A5D7E] dark:text-blue-400 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-3 py-1 rounded" : "text-slate-500 dark:text-slate-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-3 py-1 rounded"}>
              Training
            </NavLink>
          </div>
          <button className="text-[#4A5D7E] dark:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors opacity-80 duration-150 p-1 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold overflow-hidden border border-outline-variant">
               <span className="material-symbols-outlined text-sm">person</span>
            </div>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-24 md:pb-0">
        <Outlet />
      </div>

      {/* Bottom NavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-[#D1D9E0] dark:border-slate-800 pb-[env(safe-area-inset-bottom)]">
        <NavLink to="/" className={({isActive}) => `flex flex-col items-center justify-center p-1 w-16 transition-colors ${isActive ? 'text-[#4A5D7E] dark:text-blue-400 bg-slate-50 dark:bg-slate-800/50 rounded-sm scale-95' : 'text-slate-400 dark:text-slate-500 hover:text-[#4A5D7E] dark:hover:text-blue-300'}`}>
          <span className={`material-symbols-outlined mb-1 ${location.pathname === '/' || location.pathname.startsWith('/workplace') ? 'filled' : ''}`}>business</span>
          <span className="font-public-sans text-[10px] font-medium uppercase tracking-wider text-center w-full truncate">Workplaces</span>
        </NavLink>

        <NavLink to="/workers" className={({isActive}) => `flex flex-col items-center justify-center p-1 w-16 transition-colors ${isActive ? 'text-[#4A5D7E] dark:text-blue-400 bg-slate-50 dark:bg-slate-800/50 rounded-sm scale-95' : 'text-slate-400 dark:text-slate-500 hover:text-[#4A5D7E] dark:hover:text-blue-300'}`}>
          <span className={`material-symbols-outlined mb-1 ${location.pathname === '/workers' ? 'filled' : ''}`}>groups</span>
          <span className="font-public-sans text-[10px] font-medium uppercase tracking-wider text-center w-full truncate">Workers</span>
        </NavLink>

        <NavLink to="/trainings" className={({isActive}) => `flex flex-col items-center justify-center p-1 w-16 transition-colors ${isActive ? 'text-[#4A5D7E] dark:text-blue-400 bg-slate-50 dark:bg-slate-800/50 rounded-sm scale-95' : 'text-slate-400 dark:text-slate-500 hover:text-[#4A5D7E] dark:hover:text-blue-300'}`}>
          <span className={`material-symbols-outlined mb-1 ${location.pathname === '/trainings' ? 'filled' : ''}`}>school</span>
          <span className="font-public-sans text-[10px] font-medium uppercase tracking-wider text-center w-full truncate">Training</span>
        </NavLink>

        <NavLink to="/import" className={({isActive}) => `flex flex-col items-center justify-center p-1 w-16 transition-colors ${isActive ? 'text-[#4A5D7E] dark:text-blue-400 bg-slate-50 dark:bg-slate-800/50 rounded-sm scale-95' : 'text-slate-400 dark:text-slate-500 hover:text-[#4A5D7E] dark:hover:text-blue-300'}`}>
           <span className={`material-symbols-outlined mb-1 ${location.pathname === '/import' ? 'filled' : ''}`}>cloud_upload</span>
           <span className="font-public-sans text-[10px] font-medium uppercase tracking-wider text-center w-full truncate">Import</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default AppLayout;
