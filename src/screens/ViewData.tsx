import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  ChevronDown, 
  Filter,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { NavigationProps } from '../types';
import { motion } from 'motion/react';

export const ViewData: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const fetchLogs = () => {
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
      setHasFetched(true);
    }, 1500);
  };

  const dummyRecords = [
    { date: '12 Apr, 2024', grade: 'Grade 4', subject: 'Maths', topic: 'Geometry: Basic Shapes', status: 'Completed', lesson: '08' },
    { date: '10 Apr, 2024', grade: 'Grade 4', subject: 'Maths', topic: 'Arithmetic: Place Value', status: 'In Progress', lesson: '09' },
    { date: '08 Apr, 2024', grade: 'Grade 3', subject: 'EVS', topic: 'Plants: Parts and Functions', status: 'Completed', lesson: '05' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 pb-12 w-full">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-slate-800 font-headline flex items-center gap-2">
          📓 Teachers Dairy Subika
        </h1>
        <button 
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 text-sm font-semibold text-text-light hover:text-accent transition-colors bg-white px-4 py-2 rounded-lg border border-border shadow-sm"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </button>
      </div>

      {/* Filter Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-wrap gap-6 items-end mb-8 shadow-indigo-900/5">
        <div className="space-y-2 flex-1 min-w-[180px]">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest font-headline">Grade:</label>
          <div className="relative">
            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm appearance-none focus:ring-primary/20 transition-all font-sans">
              <option value="">-- Select Grade --</option>
              <option value="grade 1">Grade 1</option>
              <option value="grade 2">Grade 2</option>
              <option value="grade 3">Grade 3</option>
              <option value="grade 4">Grade 4</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>
        </div>

        <div className="space-y-2 flex-1 min-w-[180px]">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest font-headline">Subject:</label>
          <div className="relative">
            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm appearance-none focus:ring-primary/20 transition-all font-sans">
              <option value="">-- Select Subject --</option>
              <option value="Maths">Maths</option>
              <option value="EVS">EVS</option>
              <option value="English">English</option>
              <option value="Bengali MIL">Bengali MIL</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>
        </div>

        <button 
          onClick={fetchLogs}
          disabled={isFetching}
          className="bg-accent text-white font-bold py-2.5 px-8 rounded-xl hover:bg-sidebar-bg transition-all shadow-lg shadow-accent/20 active:scale-95 disabled:opacity-50 disabled:active:scale-100 h-[46px]"
        >
          {isFetching ? 'Fetching...' : 'Fetch Daily Logs'}
        </button>
      </div>

      {/* Results */}
      <div className="bg-white rounded-2xl p-8 border border-slate-100 min-h-[300px] shadow-indigo-900/5">
        {!hasFetched && !isFetching && (
          <div className="flex flex-col items-center justify-center h-full gap-4 py-20 text-slate-400 italic font-sans text-center">
             <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-2">
               <Search size={32} strokeWidth={1} />
             </div>
             <p className="max-w-xs">Select a Grade and Subject, then click "Fetch Daily Logs" to view your records.</p>
          </div>
        )}

        {isFetching && (
          <div className="flex flex-col items-center justify-center py-32 gap-6">
            <div className="w-10 h-10 border-4 border-slate-100 border-t-accent rounded-full animate-spin"></div>
            <p className="text-sm font-semibold text-text-light animate-pulse font-sans">Fetching records from secure database...</p>
          </div>
        )}

        {hasFetched && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Record Results</span>
                <span className="px-2 py-0.5 bg-blue-50 text-accent text-[10px] font-black rounded-full">3 RECORDS</span>
              </div>
              <button className="flex items-center gap-2 text-xs font-bold text-text-light hover:text-accent transition-colors">
                <Filter size={14} />
                <span>FILTER RESULTS</span>
              </button>
            </div>

            <div className="space-y-4">
              {dummyRecords.map((record, i) => (
                <div key={i} className="group border border-slate-100 p-6 rounded-xl hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                   <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-black text-slate-800">🗓 {record.date}</span>
                        <div className="flex gap-2">
                           <span className="bg-blue-50 text-primary text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">{record.grade}</span>
                           <span className="bg-green-50 text-emerald-600 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">{record.subject}</span>
                           <span className="bg-amber-50 text-amber-600 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Lesson {record.lesson}</span>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.05em] ${record.status === 'Completed' ? 'text-emerald-500' : 'text-blue-500'}`}>
                        {record.status === 'Completed' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                        {record.status}
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-headline">Topic / Sub Topic</p>
                        <p className="text-sm text-slate-700 font-sans leading-relaxed">{record.topic}</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-headline">Teacher's Activity</p>
                        <p className="text-sm text-slate-700 font-sans leading-relaxed italic">Conducted classroom lecture... [Read more]</p>
                      </div>
                   </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
                 <AlertCircle size={14} />
                 Report any discrepancies in your diary data.
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
