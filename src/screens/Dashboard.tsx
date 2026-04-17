import React from 'react';
import { 
  FileEdit, 
  BarChart3, 
  BookOpen, 
  Calendar, 
  FolderOpen, 
  ArrowRight,
  MoreVertical,
  FileText
} from 'lucide-react';
import { NavigationProps } from '../types';
import { motion } from 'motion/react';

export const Dashboard: React.FC<NavigationProps> = ({ onNavigate }) => {
  const cards = [
    { id: 'daily-entry', title: 'Daily Entry', desc: "Document today's classroom activities, student attendance, and pedagogical reflections.", icon: FileEdit, status: 'Latest: Thursday Log' },
    { id: 'academic-calendar', title: 'Academic Calendar', desc: 'Schedule exams, holidays, and school events for the upcoming session.', icon: Calendar, status: 'Upcoming: Mid-Term Finals' },
    { id: 'lesson-plan', title: 'Lesson Plan', desc: 'Draft and review your pedagogical structure and classroom objectives.', icon: BookOpen, status: 'Active: Mathematics Unit 4' },
    { id: 'paper-folder', title: 'Paper Folder', desc: 'Organize worksheets, quiz papers, and supplementary resources.', icon: FolderOpen, status: '12 Items Stored' },
    { id: 'view-data', title: 'View Data', desc: 'Comprehensive student performance metrics and attendance analytics.', icon: BarChart3, status: 'Updated 1hr ago' },
  ];

  return (
    <div className="space-y-10 max-w-6xl">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <motion.h2 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[1.875rem] font-bold text-[#0f172a]"
        >
          Welcome back, Professor
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-text-light mt-1"
        >
          Your digital classroom command center is ready.
        </motion.p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.button 
              key={card.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ scale: 1.01, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onNavigate(card.id as any)}
              className="bg-card-bg border border-border rounded-[12px] p-6 flex flex-col items-start transition-all text-left hover:border-accent group"
            >
              <div className="w-12 h-12 rounded-[10px] bg-[#eff6ff] text-accent flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">
                <Icon size={24} />
              </div>
              <h4 className="text-[1.125rem] font-semibold mb-2 text-text-main group-hover:text-accent transition-colors">{card.title}</h4>
              <p className="text-sm text-text-light leading-relaxed mb-4">
                {card.desc}
              </p>
              <span className="mt-auto inline-block text-[12px] font-semibold px-[10px] py-1 rounded-full bg-slate-50 text-text-light border border-border">
                {card.status}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Subtle Divider for additional content if needed */}
      <div className="pt-8 border-t border-border flex items-center justify-between text-xs text-text-light uppercase tracking-widest font-bold">
        <span>System synchronized with 571 No Chalitakandi LP School</span>
        <div className="flex items-center gap-2">
           <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
           <span>Live Connection</span>
        </div>
      </div>
    </div>
  );
};
