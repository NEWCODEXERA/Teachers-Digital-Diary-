import React from 'react';
import { Bell, Search, UserCircle } from 'lucide-react';
import { Screen, NavigationProps } from '../types';

export const TopBar: React.FC<NavigationProps> = ({ onNavigate, currentScreen }) => {
  const getPageTitle = () => {
    switch (currentScreen) {
      case 'dashboard': return 'Subika Singha : Workspace';
      case 'academic-calendar': return "Teacher's Academic Diary";
      case 'lesson-plan': return 'Lesson Planning Center';
      case 'paper-folder': return 'Archival Records';
      case 'daily-entry': return 'Digital Log Entry';
      case 'view-data': return 'Record Analytics';
      default: return 'Teacher Workspace';
    }
  };

  return (
    <header className="w-full h-[72px] flex justify-between items-center px-10 bg-white sticky top-0 z-40 border-b border-border">
      <div className="flex items-center gap-4">
        <h1 className="text-[1.125rem] font-semibold text-text-main">{getPageTitle()}</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 pr-6 border-r border-border">
          <span className="text-sm font-medium text-text-main">Term 2: 2023-24</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-text-light hover:text-accent transition-colors">
            <Bell size={20} />
          </button>
          
          <button 
            onClick={() => onNavigate('login')}
            className="w-10 h-10 rounded-full bg-border flex items-center justify-center text-text-main hover:bg-slate-200 transition-colors"
            title="Profile"
          >
            👤
          </button>
        </div>
      </div>
    </header>
  );
};
