export type Screen = 
  | 'login' 
  | 'dashboard' 
  | 'academic-calendar' 
  | 'lesson-plan' 
  | 'paper-folder' 
  | 'daily-entry' 
  | 'view-data';

export interface NavigationProps {
  onNavigate: (screen: Screen) => void;
  currentScreen: Screen;
}
