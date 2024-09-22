import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
// import { fetchUsers } from '../models/userApi';
import UserList from './UserList';
import fetchUsers from '../models/userApi';

const AdminDashboard = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <UserList users={users} />
    </div>
  );
};

export default AdminDashboard;

