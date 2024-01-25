import React from 'react';
import Auth from './components/Auth';
import { GameInstancePage } from './pages/ProgressPage';
import { GamePage } from './pages/GamePage';
import { TaskPage } from './pages/TaskPage';
import { UserPage } from './pages/UserPage';
import { AdminAuthProvider } from './providers/AuthProvider';
import { TeamPage } from './pages/TeamPage';
import { PendingPage } from './pages/PendingPage';

export const routes = [
  {
    path: '/task',
    element: (
      <AdminAuthProvider>
        <TaskPage />
      </AdminAuthProvider>
    ),
  },
  {
    path: '/user',
    element: (
      <AdminAuthProvider>
        <UserPage />
      </AdminAuthProvider>
    ),
  },
  {
    path: '/team',
    element: (
      <AdminAuthProvider>
        <TeamPage />
      </AdminAuthProvider>
    ),
  },
  {
    path: '/game-instance',
    element: (
      <AdminAuthProvider>
        <GameInstancePage />
      </AdminAuthProvider>
    ),
  },
  {
    path: '/pending',
    element: (
      <AdminAuthProvider>
        <PendingPage />
      </AdminAuthProvider>
    ),
  },
  {
    path: '/game',
    element: (
      <AdminAuthProvider>
        <GamePage />
      </AdminAuthProvider>
    ),
  },
];
