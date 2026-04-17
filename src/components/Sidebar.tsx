import React from 'react';
import { 
  FileEdit, 
  BarChart3, 
  BookOpen, 
  Calendar, 
  FolderOpen, 
  Settings, 
  LogOut, 
  CloudUpload,
  LayoutDashboard
} from 'lucide-react';
import { Screen, NavigationProps } from '../types';

export const Sidebar: React.FC<NavigationProps> = ({ onNavigate, currentScreen }) => {
  const navItems = [
    { id: 'dashboard' as Screen, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'daily-entry' as Screen, label: 'Daily Entry', icon: FileEdit },
    { id: 'academic-calendar' as Screen, label: 'Academic Calendar', icon: Calendar },
    { id: 'lesson-plan' as Screen, label: 'Lesson Plan', icon: BookOpen },
    { id: 'paper-folder' as Screen, label: 'Paper Folder', icon: FolderOpen },
    { id: 'view-data' as Screen, label: 'View Data', icon: BarChart3 },
  ];

  return (
    <aside className="hidden md:flex flex-col h-screen w-[260px] bg-sidebar-bg py-8 flex-shrink-0 fixed left-0 top-0 z-50 text-white">
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center font-bold text-white shrink-0">
          A
        </div>
        <div className="overflow-hidden">
          <h1 className="text-lg font-bold tracking-tight text-white leading-tight truncate">The Architect</h1>
        </div>
      </div>
      
      <nav className="flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all duration-200 border-l-[3px] ${
                isActive 
                  ? 'bg-sidebar-hover text-white border-sidebar-active' 
                  : 'text-text-light hover:bg-sidebar-hover hover:text-white border-transparent'
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="px-6 pt-6 border-t border-sidebar-hover">
        <button 
          onClick={() => onNavigate('login')}
          className="flex items-center gap-3 py-2 text-red-500 hover:text-red-400 transition-colors font-medium text-sm"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};
