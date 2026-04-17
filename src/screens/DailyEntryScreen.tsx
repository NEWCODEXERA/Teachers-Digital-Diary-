import React from 'react';
import { 
  CloudUpload, 
  ExternalLink, 
  FileText, 
  History, 
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { NavigationProps } from '../types';

export const DailyEntry: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-12">
      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-text-light mb-4">
            <span>Records</span>
            <ChevronRight size={10} />
            <span className="text-accent font-bold">Daily Submission</span>
          </nav>
          <h2 className="font-headline text-4xl font-extrabold text-text-main tracking-tight mb-2">Daily Entry</h2>
          <p className="text-text-light max-w-xl font-sans leading-relaxed">
            Complete your daily classroom logs, attendance summaries, and curriculum progress updates below.
          </p>
        </div>
        <button className="px-5 py-2.5 rounded-xl bg-white text-text-main font-semibold text-sm hover:bg-slate-50 transition-colors flex items-center gap-2 border border-border">
          <History size={18} />
          View History
        </button>
      </div>

      {/* Main Content Card (Iframe embed simulation) */}
      <div className="grid grid-cols-1 gap-8">
        <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-border h-[700px] flex flex-col">
           <div className="h-1 bg-accent w-full shadow-sm shadow-accent/20"></div>
           <div className="p-8 border-b flex justify-between items-center bg-slate-50/50">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-text-main">Teacher's Daily Log (Subika Singha)</h3>
                <p className="text-xs text-text-light">Class activity and pedagogical reflections recorded here.</p>
              </div>
              <button 
                onClick={() => onNavigate('dashboard')}
                className="text-xs font-bold text-accent hover:underline"
              >
                * Indicates required question
              </button>
           </div>
           
           <div className="flex-1 bg-slate-100 flex flex-col items-center">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScBSvvpgRJXGoVxyBrPHdMrWVeqTctUDDTY3SKCucvQjMUmRA/viewform?embedded=true" 
                className="w-full h-full border-none"
                title="Teacher's Daily Log Form"
              >
                Loading…
              </iframe>
           </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
            <h3 className="font-bold text-sm mb-2 text-accent">Smart Sync</h3>
            <p className="text-[11px] text-text-light leading-relaxed font-sans">Entries are automatically formatted and synced with your weekly reports.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
            <h3 className="font-bold text-sm mb-2 text-accent">Secure Entry</h3>
            <p className="text-[11px] text-text-light leading-relaxed font-sans">Form data is encrypted and accessible only by authorized personnel.</p>
          </div>
          <div className="bg-accent text-white p-6 rounded-xl shadow-lg shadow-accent/20 relative overflow-hidden flex flex-col justify-center">
            <div className="relative z-10">
              <h3 className="font-bold text-sm mb-2">Need Assistance?</h3>
              <p className="text-[11px] text-blue-100 opacity-80 leading-relaxed mb-4">Contact the team for any technical support with your diary.</p>
              <button className="text-[10px] font-bold uppercase tracking-wider border-b border-white/30 pb-0.5">Contact Support</button>
            </div>
            <HelpCircle className="absolute -right-4 -bottom-4 text-white/10" size={100} />
          </div>
        </div>
      </div>
    </div>
  );
};
