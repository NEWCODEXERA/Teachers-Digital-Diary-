import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { LoginScreen } from './screens/LoginScreen';
import { Dashboard } from './screens/Dashboard';
import { AcademicCalendar } from './screens/AcademicCalendarScreen';
import { LessonPlan } from './screens/LessonPlanScreen';
import { DailyEntry } from './screens/DailyEntryScreen';
import { PaperFolder } from './screens/PaperFolderScreen';
import { ViewData } from './screens/ViewData';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard currentScreen={currentScreen} onNavigate={handleNavigate} />;
      case 'academic-calendar':
        return <AcademicCalendar currentScreen={currentScreen} onNavigate={handleNavigate} />;
      case 'lesson-plan':
        return <LessonPlan currentScreen={currentScreen} onNavigate={handleNavigate} />;
      case 'daily-entry':
        return <DailyEntry currentScreen={currentScreen} onNavigate={handleNavigate} />;
      case 'paper-folder':
        return <PaperFolder currentScreen={currentScreen} onNavigate={handleNavigate} />;
      case 'view-data':
        return <ViewData currentScreen={currentScreen} onNavigate={handleNavigate} />;
      default:
        return <Dashboard currentScreen={currentScreen} onNavigate={handleNavigate} />;
    }
  };

  if (currentScreen === 'login') {
    return (
      <AnimatePresence mode="wait">
        <motion.div
           key="login"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
        >
          <LoginScreen currentScreen={currentScreen} onNavigate={handleNavigate} />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      <Sidebar currentScreen={currentScreen} onNavigate={handleNavigate} />
      
      <div className="flex-1 flex flex-col md:ml-72 min-h-screen">
        <TopBar currentScreen={currentScreen} onNavigate={handleNavigate} />
        
        <main className="flex-1 p-6 md:p-10 max-w-7xl w-full mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default App;
