import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

interface ProtectedRouteProps {
  children: JSX.Element;
  roleRequired?: 'admin' | 'user'; // Role-based protection
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, roleRequired }) => {
  const { token, role } = useAppSelector((state) => state.auth);

  if (!token) {
    // If user is not authenticated, redirect to login
    return <Navigate to="/login" replace />;
  }

  if (roleRequired && role !== roleRequired) {
    // If user does not have the required role, redirect to the appropriate page
    return <Navigate to="/not-authorized" replace />;
  }

  // If the user is authenticated and has the required role, render the protected content
  return children;
};

export default ProtectedRoute;

