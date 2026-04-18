import React from 'react';
import { 
  FileText, 
  ExternalLink, 
  Calendar, 
  Search, 
  Download, 
  Printer, 
  ZoomIn, 
  ZoomOut,
  ChevronRight,
  CalendarDays
} from 'lucide-react';
import { NavigationProps } from '../types';
import { motion } from 'motion/react';

export const AcademicCalendar: React.FC<NavigationProps> = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-12">
      {/* Header Section */}
      <div className="mb-12">
        <nav className="flex items-center gap-2 text-xs font-bold text-text-light uppercase tracking-widest mb-4">
          <span>Portal</span>
          <ChevronRight size={12} />
          <span className="text-accent">Academic Calendar</span>
        </nav>
        <h2 className="text-4xl font-extrabold text-text-main tracking-tight mb-2">Academic Calendar</h2>
        <p className="text-text-light max-w-2xl text-lg font-sans leading-relaxed">
          Access the official institutional schedule for the 2024-2025 academic session. View semester breakdowns, examination periods, and holiday listings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: List */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">Available Documents</h3>
          
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-border relative overflow-hidden flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
              <FileText size={32} />
            </div>
            <h4 className="font-bold text-lg text-text-main mb-1">Annual Calendar 2024</h4>
            <p className="text-sm text-text-light mb-4">Complete institutional roadmap, holidays & events.</p>
            <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-tighter">
              <span>Preview Document</span>
              <ExternalLink size={12} />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-500 mb-4 group-hover:scale-110 transition-transform">
              <Calendar size={32} />
            </div>
            <h4 className="font-bold text-lg text-slate-800 mb-1">Exam Schedule Q3</h4>
            <p className="text-sm text-slate-500 mb-4">Detailed assessment dates for all grade levels.</p>
            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-tighter">
              <span>Preview Document</span>
              <ExternalLink size={12} />
            </div>
          </motion.div>

          {/* Quick Stats */}
          <div className="bg-accent p-6 rounded-xl text-white shadow-lg shadow-blue-900/20 flex flex-col gap-4">
             <div className="flex justify-between items-center">
               <span className="text-[10px] font-bold tracking-widest uppercase opacity-60">Next Event</span>
               <CalendarDays size={20} />
             </div>
             <div>
               <h5 className="text-xl font-bold font-headline">Mid-Term Assessment</h5>
               <p className="text-blue-100/70 text-sm mt-1">Starting Monday, Oct 14</p>
             </div>
             <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
               <div className="bg-white h-full w-[65%]"></div>
             </div>
          </div>
        </div>

        {/* Right Column: Previewer */}
        <div className="lg:col-span-8">
           <div className="bg-slate-100 rounded-2xl p-4 min-h-[700px] border border-slate-200 shadow-inner">
             <div className="bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col h-full overflow-hidden">
                <div className="h-14 border-b border-slate-100 flex items-center justify-between px-6">
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-accent" />
                    <span className="text-sm font-semibold text-text-main">Annual_Calendar_2024_Final.pdf</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-slate-50 rounded-md text-text-light group"><ZoomOut size={16} /></button>
                    <span className="text-xs font-medium px-2 text-text-light">100%</span>
                    <button className="p-2 hover:bg-slate-50 rounded-md text-text-light group"><ZoomIn size={16} /></button>
                    <div className="w-px h-4 bg-border mx-2"></div>
                    <button className="p-2 hover:bg-slate-50 rounded-md text-text-light group"><Download size={16} /></button>
                    <button className="p-2 hover:bg-slate-50 rounded-md text-text-light group"><Printer size={16} /></button>
                  </div>
                </div>

                <div className="flex-1 bg-slate-200 overflow-y-auto p-12 flex flex-col items-center">
                  <div className="bg-white w-full max-w-[600px] aspect-[1/1.41] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] p-12 relative flex flex-col">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-primary"></div>
                    <div className="flex justify-between items-start mb-16">
                      <div className="space-y-4">
                        <div className="h-4 w-32 bg-slate-100 rounded-full"></div>
                        <div className="h-10 w-48 bg-blue-50/50 rounded-lg"></div>
                      </div>
                      <div className="w-14 h-14 bg-primary rounded-full shadow-lg"></div>
                    </div>
                    
                    <div className="text-center mb-12">
                      <span className="inline-block px-4 py-1.5 bg-primary-container text-accent rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Official Schedule</span>
                      <h3 className="text-2xl font-black text-text-main font-headline leading-tight">Subika Singha : A/T 571 No Chalitakandi LP School. Teachers Digital diary</h3>
                    </div>

                    <div className="grid grid-cols-3 gap-8 mb-12">
                      {[1, 2, 3].map(m => (
                        <div key={m} className="space-y-3">
                          <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                          <div className="grid grid-cols-7 gap-1">
                             {Array.from({ length: 14 }).map((_, i) => (
                               <div key={i} className={`h-2 rounded ${i % 7 === 5 ? 'bg-primary/30' : 'bg-slate-100'}`}></div>
                             ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex justify-between items-end opacity-20 border-t pt-8">
                       <span className="text-[8px] font-bold tracking-widest uppercase">Confidential Faculty Use</span>
                       <span className="text-[8px] font-bold tracking-widest uppercase">Page 01 of 12</span>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};
