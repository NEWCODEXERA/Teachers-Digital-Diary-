import React, { useState } from 'react';
import { User, Lock, Info, AlertCircle } from 'lucide-react';
import { NavigationProps } from '../types';

export const LoginScreen: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('Subika');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'Subika') {
      onNavigate('dashboard');
    } else {
      setError('Invalid username or password. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6">
      <div className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-xl bg-white shadow-2xl lg:grid-cols-12 min-h-[600px]">
        {/* Branding Side */}
        <div className="relative hidden flex-col justify-between p-12 lg:col-span-5 lg:flex bg-[#0f172a] overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10 bg-cover bg-center transition-transform hover:scale-105 duration-[10s]" 
            style={{ backgroundImage: "url('https://picsum.photos/seed/architecture/1000/1500')" }}
          ></div>
          <div className="relative z-10">
            <h1 className="font-headline text-3xl font-extrabold tracking-tight text-white">Subika Singha : A/T 571 No Chalitakandi LP School. Teachers Digital diary</h1>
            <p className="mt-2 font-sans text-sm text-blue-100/60 uppercase tracking-widest font-bold">Subika Singha • Digital Diary</p>
          </div>
          <div className="relative z-10">
            <blockquote className="font-headline text-2xl font-semibold leading-tight text-white/90 italic">
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>
            <div className="mt-8 flex gap-2">
              <div className="h-1 w-12 rounded-full bg-white"></div>
              <div className="h-1 w-4 rounded-full bg-white/30"></div>
              <div className="h-1 w-4 rounded-full bg-white/30"></div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="flex flex-col justify-center p-8 md:p-16 lg:col-span-7 bg-white">
          <div className="mx-auto w-full max-w-sm">
            <div className="mb-12 lg:hidden">
              <h1 className="font-headline text-2xl font-extrabold text-accent leading-tight">Subika Singha : A/T 571 No Chalitakandi LP School. Teachers Digital diary</h1>
            </div>
            <div className="mb-10">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-text-main">Welcome Back</h2>
              <p className="mt-2 text-text-light font-sans">Sign in to your personal workspace.</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="p-3 rounded-lg bg-red-50 text-red-600 border border-red-100 flex items-center gap-2 text-xs font-semibold animate-shake">
                  <AlertCircle size={16} />
                  {error}
                </div>
              )}
              
              <div>
                <label className="mb-2 block font-sans text-sm font-medium text-text-main" htmlFor="username">Username</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
                  <input 
                    className="w-full rounded-lg border-border bg-slate-50 px-10 py-3 text-text-main placeholder:text-slate-300 focus:border-accent focus:ring-accent/20 transition-all font-sans" 
                    id="username" 
                    placeholder="Enter username" 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block font-sans text-sm font-medium text-text-main" htmlFor="password">Password</label>
                  <a className="text-xs font-semibold text-accent hover:opacity-80 transition-opacity" href="#">Forgot?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
                  <input 
                    className="w-full rounded-lg border-border bg-slate-50 px-10 py-3 text-text-main placeholder:text-slate-300 focus:border-accent focus:ring-accent/20 transition-all font-sans" 
                    id="password" 
                    placeholder="••••••••" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <input 
                  className="h-4 w-4 rounded border-border text-accent focus:ring-accent/40 bg-slate-50" 
                  id="remember-me" 
                  type="checkbox" 
                />
                <label className="ml-3 block font-sans text-sm text-text-light" htmlFor="remember-me">Keep me logged in</label>
              </div>
              <button 
                type="submit"
                className="flex w-full justify-center rounded-lg bg-accent px-4 py-3.5 text-sm font-semibold text-white shadow-xl shadow-accent/20 hover:bg-[#1e40af] active:scale-95 transition-all uppercase tracking-widest"
              >
                Access Dashboard
              </button>
            </form>

            <div className="mt-12 rounded-xl bg-blue-50/50 p-4 border border-blue-100">
              <div className="flex items-start gap-3">
                <Info className="text-accent mt-0.5" size={20} />
                <div>
                  <p className="font-headline text-sm font-bold text-accent">Teacher's Profile Access</p>
                  <p className="mt-1 text-xs text-text-light leading-relaxed">
                    Use <span className="font-semibold text-accent">Admin</span> as username and <span className="font-semibold text-accent">Subika</span> for the secret passphrase to unlock Subika Singha - 571 No Chalitakandi LP School profile.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-10 text-center font-sans text-xs text-text-light">
              Don't have an invitation? <a className="font-semibold text-accent hover:opacity-80 transition-opacity" href="#">Request Access</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
