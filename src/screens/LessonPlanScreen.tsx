import React from 'react';
import { 
  CloudUpload, 
  School, 
  Building2, 
  ExternalLink, 
  FileText, 
  LayoutGrid, 
  List, 
  Lightbulb, 
  RefreshCw, 
  ShieldCheck,
  MoreVertical,
  Play
} from 'lucide-react';
import { NavigationProps } from '../types';
import { motion } from 'motion/react';

export const LessonPlan: React.FC<NavigationProps> = () => {
  const files = [
    { name: 'Mathematics_Class4_Geometry.pdf', time: '2 hours ago', size: '2.4 MB', type: 'pdf', iconColor: 'text-red-500' },
    { name: 'English_Unit_3_Poetry_Plan.docx', time: 'Yesterday', size: '1.1 MB', type: 'doc', iconColor: 'text-blue-500' },
    { name: 'Science_Class5_Ecosystems.pptx', time: '3 days ago', size: '8.7 MB', type: 'slides', iconColor: 'text-orange-500' },
    { name: 'Social_Studies_Term1_Resources.zip', time: 'Oct 24', size: '45.0 MB', type: 'archive', iconColor: 'text-slate-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pb-12 w-full">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-accent tracking-widest uppercase">Curriculum Hub</span>
            <div className="h-px w-12 bg-accent/20"></div>
          </div>
          <h2 className="text-4xl font-extrabold text-text-main tracking-tight leading-none mb-4 font-headline">Lesson Plans</h2>
          <p className="text-text-light text-lg leading-relaxed">
            Organize, upload, and manage your pedagogical strategies. All digital assets are synchronized with your school cloud storage for seamless access across classrooms.
          </p>
        </div>
        <a 
          href="https://drive.google.com" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-md font-bold transition-all active:scale-95 shadow-xl shadow-accent/20"
        >
          <ExternalLink size={18} />
          Open Google Drive
        </a>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
        {/* Upload Zone */}
        <div className="md:col-span-8 bg-white rounded-xl p-10 flex flex-col items-center justify-center border-2 border-dashed border-border hover:border-accent transition-all group shadow-sm">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-50 transition-colors"
          >
            <CloudUpload className="text-accent" size={40} />
          </motion.div>
          <h3 className="text-xl font-bold mb-2 text-text-main">Upload Lesson Assets</h3>
          <p className="text-text-light text-center max-w-sm mb-8 font-sans text-sm">
            Drag and drop your PDF, Doc, or PPT files here to sync them with the school repository.
          </p>
          <button className="px-8 py-3 bg-white text-accent border border-accent/20 rounded-lg font-bold hover:bg-accent hover:text-white transition-all shadow-sm">
            Select Files
          </button>
        </div>

        {/* Identity Card */}
        <div className="md:col-span-4 bg-accent text-white rounded-xl p-10 flex flex-col justify-between overflow-hidden relative shadow-2xl">
          <div className="relative z-10">
            <School className="text-white/40 mb-6" size={48} />
            <h3 className="text-2xl font-bold leading-tight mb-2 font-headline">571 No Chalitakandi LP School</h3>
            <p className="text-blue-100/60 text-sm">Official Digital Repository of Teacher Subika Singha</p>
          </div>
          <div className="relative z-10 mt-8">
            <div className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Academic Year</div>
            <div className="text-lg font-bold font-headline">2024 - 2025</div>
          </div>
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Building2 size={200} />
          </div>
        </div>
      </div>

      {/* Files Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold tracking-tight text-text-main">Recent Lesson Files</h3>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-primary-container text-accent rounded-lg transition-colors"><LayoutGrid size={20} /></button>
            <button className="p-2 text-text-light hover:bg-slate-100 rounded-lg"><List size={20} /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {files.map((file, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl p-6 group hover:shadow-2xl hover:shadow-primary/5 transition-all cursor-pointer border border-slate-100 shadow-sm"
            >
              <div className="w-full aspect-video bg-slate-50 rounded-lg mb-4 overflow-hidden relative flex items-center justify-center">
                 <div className={`absolute inset-0 opacity-10 bg-current ${file.iconColor}`}></div>
                 <FileText className={file.iconColor} size={40} />
              </div>
              <h4 className="font-bold text-slate-800 truncate mb-1 text-sm">{file.name}</h4>
              <p className="text-[10px] text-slate-400 font-medium">{file.time} • {file.size}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Insight Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Lightbulb, title: 'Teaching Tip', desc: 'Keep lesson plans visual and interactive. Hyperlink your digital resources directly.', color: 'text-amber-500', bgColor: 'bg-amber-50' },
          { icon: RefreshCw, title: 'Sync Status', desc: 'Drive folder is currently synchronized. Last successful handshake: 4 minutes ago.', color: 'text-blue-500', bgColor: 'bg-blue-50' },
          { icon: ShieldCheck, title: 'Privacy', desc: 'Files uploaded here are restricted to the school domain. All links follow secure protocols.', color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
        ].map((tip, i) => {
          const Icon = tip.icon;
          return (
            <div key={i} className={`${tip.bgColor} p-6 rounded-xl border-l-4 border-current ${tip.color}`}>
              <Icon size={24} className="mb-4" />
              <h5 className="font-bold mb-1 text-slate-800">{tip.title}</h5>
              <p className="text-sm text-slate-500 leading-relaxed font-sans">{tip.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
