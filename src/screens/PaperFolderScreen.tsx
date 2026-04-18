import React from 'react';
import { 
  CloudUpload, 
  ExternalLink, 
  FileText, 
  LayoutGrid, 
  List, 
  ChevronRight,
  MoreVertical,
  Plus,
  Activity,
  UserCheck
} from 'lucide-react';
import { NavigationProps } from '../types';
import { motion } from 'motion/react';

export const PaperFolder: React.FC<NavigationProps> = () => {
  const archives = [
    { name: 'Physical_Scan_01.pdf', info: 'Scanned Oct 12, 2023 • 4.2 MB', tags: ['SCAN', 'ARCHIVE'], color: 'text-amber-600', bgColor: 'bg-amber-50' },
    { name: 'Building_Blueprint_v2.dwg', info: 'Modified 2 days ago • 18.5 MB', tags: ['CAD', 'STRUCTURAL'], color: 'text-slate-600', bgColor: 'bg-slate-100' },
    { name: 'Archive_Report_Oct.docx', info: 'Added Oct 05, 2023 • 1.1 MB', tags: ['REPORT', 'DOCUMENT'], color: 'text-blue-600', bgColor: 'bg-blue-50' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pb-12 w-full">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-text-main mb-2 font-headline">Paper Folder</h1>
          <p className="text-lg text-text-light font-sans leading-relaxed">
            Access archived documents, high-resolution physical scans, and long-term academic records curated by Subika Singha for institutional excellence.
          </p>
        </div>
        <a 
          href="#" 
          className="flex items-center gap-2 px-5 py-2.5 bg-white text-text-main rounded-xl font-semibold hover:bg-slate-50 transition-all border border-border shadow-sm group"
        >
          <ExternalLink className="text-amber-600 group-hover:scale-110 transition-transform" size={18} />
          Open Google Drive
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Upload Box */}
        <div className="lg:col-span-4 bg-sidebar-bg rounded-xl p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[450px] shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black opacity-50"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-6">
              <CloudUpload className="text-amber-500" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-headline">Upload Document</h3>
            <p className="text-text-light mb-8 leading-relaxed text-sm font-sans">
              Direct upload to secure storage. Assets automatically sync with the digital archive repository.
            </p>
          </div>
          <div className="relative z-10 border-2 border-dashed border-sidebar-hover rounded-xl p-8 text-center hover:border-sidebar-active transition-colors cursor-pointer group">
            <CloudUpload className="text-text-light group-hover:text-sidebar-active transition-colors mb-4 mx-auto" size={40} />
            <p className="text-sm font-medium text-text-light font-sans">Drag blueprints or scans here</p>
            <p className="text-[10px] text-slate-600 mt-2 tracking-widest uppercase font-bold">PDF, DWG, DOCX up to 50MB</p>
          </div>
        </div>

        {/* Right: Files */}
        <div className="lg:col-span-8 flex flex-col gap-8">
           <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-text-main font-headline">Recent Paper Folder Files</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-slate-100 rounded-lg text-text-main"><LayoutGrid size={18} /></button>
                <button className="p-2 text-text-light hover:bg-slate-50 rounded-lg transition-colors"><List size={18} /></button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {archives.map((file, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 4 }}
                  className="bg-white p-5 rounded-xl flex items-start gap-4 hover:shadow-xl transition-all duration-300 border border-border shadow-sm group"
                >
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center shrink-0 ${file.bgColor}`}>
                    <FileText className={file.color} size={30} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-text-main truncate mb-1 text-sm">{file.name}</h4>
                    <p className="text-[10px] text-text-light mb-3 font-sans">{file.info}</p>
                    <div className="flex gap-2">
                       {file.tags.map(tag => (
                         <span key={tag} className="px-2 py-0.5 bg-slate-50 text-text-light rounded-full text-[8px] font-bold tracking-widest uppercase">{tag}</span>
                       ))}
                    </div>
                  </div>
                  <button className="text-slate-200 group-hover:text-slate-400 transition-colors">
                    <MoreVertical size={20} />
                  </button>
                </motion.div>
              ))}

              <div className="bg-white p-5 rounded-xl border-2 border-dashed border-slate-100 flex items-center gap-4 group cursor-pointer hover:border-slate-300 transition-all">
                <div className="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center">
                  <Plus className="text-slate-300 group-hover:text-slate-500 transition-colors" size={30} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-300 group-hover:text-slate-500 transition-colors text-sm">Add new file...</h4>
                   <p className="text-[10px] text-slate-200">Select from device</p>
                </div>
              </div>
           </div>

           {/* Insights */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="md:col-span-2 bg-slate-50 rounded-xl p-8 relative overflow-hidden flex flex-col justify-between h-48 border border-slate-100">
                 <div className="relative z-10">
                   <h4 className="text-lg font-bold text-slate-800 font-headline mb-2">Workspace Insight</h4>
                   <p className="text-slate-500 text-xs font-sans max-w-sm leading-relaxed">Your archival storage is at 45% capacity. Digital assets are optimized for high-performance retrieval.</p>
                 </div>
                 <div className="flex gap-4 relative z-10">
                   <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
                     <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                     <span className="text-[10px] font-bold text-slate-700">128 BLUEPRINTS</span>
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
                     <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                     <span className="text-[10px] font-bold text-slate-700">3,402 PAGES</span>
                   </div>
                 </div>
                 <Activity className="absolute -right-8 -bottom-8 text-slate-200/50" size={140} />
              </div>
              <div className="bg-amber-50 rounded-xl p-8 flex flex-col items-center justify-center text-center border border-amber-100">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                   <UserCheck className="text-amber-600" size={24} />
                 </div>
                 <h4 className="font-bold text-amber-900 text-sm mb-1">OCR Ready</h4>
                 <p className="text-[10px] text-amber-800/60 leading-relaxed font-sans font-medium">All scans are automatically processed for text search.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
