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
    path: '/admin/task',
    element: (
      <AdminAuthProvider>
        <TaskPage />
      </AdminAuthProvider>
    ),
  },
  {
    path: '/admin/user',
    element: (
      <AdminAuthProvider>
        <UserPage />
      </AdminAuthProvider>
    ),
  },
  {
    path: '/admin/team',
    element: (
      <AdminAuthProvider>
        <TeamPage />
      </AdminAuthProvider>
    ),
  },
  {
    path: '/admin/game-instance',
    element: (
      <AdminAuthProvider>
        <GameInstancePage />
      </AdminAuthProvider>
    ),
  },
  {
    path: '/admin/pending',
    element: (
      <AdminAuthProvider>
        <PendingPage />
      </AdminAuthProvider>
    ),
  },
  {
    path: '/admin/game',
    element: (
      <AdminAuthProvider>
        <GamePage />
      </AdminAuthProvider>
    ),
  },
];
