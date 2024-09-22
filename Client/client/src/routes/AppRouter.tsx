import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import AdminDashboard from '../components/AdminDashboard';
import TaskList from '../components/TaskList';
// import ProtectedRoute from '../components/ProtectedRoute';
// import NotAuthorized from '../components/NotAuthorized';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Admin Dashboard - Only accessible by admin users */}
      <Route 
        path="/admin/dashboard" 
        element={
          // <ProtectedRoute roleRequired="admin">
            <AdminDashboard />
          // </ProtectedRoute>
        } 
      />
      
      {/* Task List - Accessible by normal users */}
      <Route 
        path="/tasks" 
        element={
          // <ProtectedRoute roleRequired="user">
            <TaskList tasks={[]}/>
          // </ProtectedRoute>
        } 
      />

      {/* Fallback route */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      {/* <Route path="/not-authorized" element={<NotAuthorized />} /> */}

    </Routes>
  </Router>
);

export default AppRouter;
