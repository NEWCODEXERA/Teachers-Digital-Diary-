import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  ChevronDown, 
  Filter,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Calendar
} from 'lucide-react';
import { NavigationProps } from '../types';
import { motion } from 'motion/react';
import Papa from 'papaparse';

export const ViewData: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [records, setRecords] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Helper to find value by flexible key matching (case-insensitive, space-insensitive)
  const getVal = (row: any, ...requestedKeys: string[]) => {
    const rowKeys = Object.keys(row);
    for (const req of requestedKeys) {
      // 1. Precise match
      if (row[req]) return row[req];
      
      // 2. Fuzzy match (ignore spaces and case)
      const normalizedReq = req.toLowerCase().replace(/\s+/g, '');
      const foundKey = rowKeys.find(k => k.toLowerCase().replace(/\s+/g, '').includes(normalizedReq));
      if (foundKey && row[foundKey]) return row[foundKey];
    }
    return 'N/A';
  };

  const googleSheetCsvUrl = 'https://docs.google.com/spreadsheets/d/1f3o6SNAxlDyoPOI8DjNmn19y97bTxzDqGw7oTtdsdtc/export?format=csv';

  const fetchLogs = async () => {
    if (!fromDate || !toDate) {
      alert('Please select BOTH "From Date" and "To Date" before fetching.');
      return;
    }

    setIsFetching(true);
    setHasFetched(false);
    setError(null);

    try {
      const response = await fetch(googleSheetCsvUrl);
      const csvText = await response.text();
      
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const fetchedData = results.data;
          
          const filtered = fetchedData.filter((row: any) => {
            const dateStr = getVal(row, 'Date of Log Entry', 'Date', 'Timestamp', 'TIMESTAMP');
            if (!dateStr || dateStr === 'N/A') return false;

            try {
              let entryDate: Date;
              if (typeof dateStr === 'string' && dateStr.includes('/')) {
                const parts = dateStr.split(' ')[0].split('/');
                const [day, month, year] = parts.map(Number);
                entryDate = new Date(year, month - 1, day);
              } else {
                entryDate = new Date(dateStr);
              }

              const start = new Date(fromDate);
              const end = new Date(toDate);
              entryDate.setHours(0, 0, 0, 0);
              start.setHours(0, 0, 0, 0);
              end.setHours(23, 59, 59, 999);

              return entryDate >= start && entryDate <= end;
            } catch (e) {
              return false;
            }
          });

          setRecords(filtered);
          setIsFetching(false);
          setHasFetched(true);
        },
        error: (err) => {
          setError("Failed to parse the data structure.");
          setIsFetching(false);
        }
      });
    } catch (err) {
      setError("Failed to reach the database. Please check your internet connection.");
      setIsFetching(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-12 w-full">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-bold text-text-main font-headline flex items-center gap-2 max-w-xl leading-tight">
          📓 Subika Singha : A/T 571 No Chalitakandi LP School. Teachers Digital diary
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
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-8 shadow-indigo-900/5">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest font-headline">From Date:</label>
          <div className="relative">
            <input 
              type="date" 
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-accent/20 transition-all font-sans" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest font-headline">To Date:</label>
          <div className="relative">
            <input 
              type="date" 
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-accent/20 transition-all font-sans" 
            />
          </div>
        </div>

        <button 
          onClick={fetchLogs}
          disabled={isFetching}
          className="bg-accent text-white font-bold py-2.5 px-8 rounded-xl hover:bg-sidebar-bg transition-all shadow-lg shadow-accent/20 active:scale-95 disabled:opacity-50 disabled:active:scale-100 h-[46px]"
        >
          {isFetching ? 'Fetching...' : 'Fetch All Entries'}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm font-medium">
          <AlertCircle size={20} />
          {error}
        </div>
      )}

      {/* Results */}
      <div className="bg-white rounded-2xl p-8 border border-slate-100 min-h-[300px] shadow-indigo-900/5">
        {!hasFetched && !isFetching && (
          <div className="flex flex-col items-center justify-center h-full gap-4 py-20 text-slate-400 italic font-sans text-center">
             <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-2">
                <Search size={32} strokeWidth={1} />
             </div>
             <p className="max-w-xs">Select a date range and click "Fetch All Entries" to pull data from your Google Sheet.</p>
          </div>
        )}

        {isFetching && (
          <div className="flex flex-col items-center justify-center py-32 gap-6">
            <div className="w-10 h-10 border-4 border-slate-100 border-t-accent rounded-full animate-spin"></div>
            <p className="text-sm font-semibold text-text-light animate-pulse font-sans">Connecting to Google Spreadsheets...</p>
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
                <span className="px-2 py-0.5 bg-blue-50 text-accent text-[10px] font-black rounded-full">
                  {records.length} {records.length === 1 ? 'RECORD' : 'RECORDS'}
                </span>
              </div>
              <button className="flex items-center gap-2 text-xs font-bold text-text-light hover:text-accent transition-colors">
                <Filter size={14} />
                <span>EXPORT TO PDF</span>
              </button>
            </div>

            {records.length === 0 ? (
              <div className="text-center py-20 text-text-light font-sans italic">
                No entries found in this date range. Try selecting different dates.
              </div>
            ) : (
              <div className="space-y-4">
                {records.map((record, i) => {
                  const dateVal = getVal(record, 'Date of Log Entry', 'Date', 'Timestamp');
                  const gradeVal = getVal(record, 'Which Grade/Class are you documenting for today?', 'Grade', 'Class');
                  const subjectVal = getVal(record, 'Subject Taught Today', 'Subject');
                  const topicVal = getVal(record, 'Topic / Sub topic', 'Topic');
                  const activityVal = getVal(record, 'Teacher\'s Activity', 'Activity', 'Teacher Activity');
                  const lessonNo = getVal(record, 'Lesson / Chapter No', 'Lesson No', 'Chapter No');
                  const objectives = getVal(record, 'Lesson Objectives Met Today (Select all that apply)', 'Objectives');
                  const tlmVal = getVal(record, 'TLM Use');
                  const studentActVal = getVal(record, 'Students Activity');
                  const outcomesVal = getVal(record, 'Students Learning Outcomes');
                  const homeworkVal = getVal(record, 'Homework/Assignment Given (If applicable)', 'Homework');

                  return (
                    <div key={i} className="group border border-slate-100 p-6 rounded-xl hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                       <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-black text-slate-800">🗓 {dateVal}</span>
                            <div className="flex gap-2">
                               <span className="bg-blue-50 text-primary text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">{gradeVal}</span>
                               <span className="bg-green-50 text-emerald-600 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">{subjectVal}</span>
                               <span className="bg-purple-50 text-purple-600 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Ch. {lessonNo}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.05em] text-emerald-500">
                            <CheckCircle2 size={12} />
                            Verified entry
                          </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-slate-50 p-4 rounded-lg border-l-2 border-emerald-500/30">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-headline">Topic / Sub Topic</p>
                            <p className="text-sm text-slate-700 font-sans leading-relaxed">{topicVal}</p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-lg border-l-2 border-blue-500/30">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-headline">Teacher's Activity</p>
                            <p className="text-sm text-slate-700 font-sans leading-relaxed italic">{activityVal}</p>
                          </div>
                       </div>

                       <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="p-3 border border-slate-50 rounded-lg bg-white/50">
                            <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">TLM Use</p>
                            <p className="text-xs text-slate-600">{tlmVal}</p>
                          </div>
                          <div className="p-3 border border-slate-50 rounded-lg bg-white/50">
                            <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">Student Activity</p>
                            <p className="text-xs text-slate-600">{studentActVal}</p>
                          </div>
                          <div className="p-3 border border-slate-50 rounded-lg bg-white/50">
                            <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">Learning Outcomes</p>
                            <p className="text-xs text-slate-600">{outcomesVal}</p>
                          </div>
                       </div>

                       <div className="mt-4 p-4 bg-slate-50/50 rounded-xl border border-slate-100 italic">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                               <p className="text-[9px] font-bold text-accent uppercase mb-2 tracking-widest">Objectives Met</p>
                               <p className="text-xs text-text-main leading-relaxed">{objectives}</p>
                            </div>
                            <div>
                               <p className="text-[9px] font-bold text-accent uppercase mb-2 tracking-widest">Homework / Assignment</p>
                               <p className="text-xs text-text-main leading-relaxed">{homeworkVal}</p>
                            </div>
                          </div>
                       </div>
                    </div>
                  );
                })}
              </div>
            )}
            
            <div className="mt-12 flex justify-center">
              <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
                 <AlertCircle size={14} />
                 Data synced from your official Google Spreadsheet.
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
