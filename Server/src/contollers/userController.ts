import { Request, Response } from 'express';
import { deleteUser, getAllUsers } from '../services/user/userService';

interface AuthenticatedRequest extends Request {
    user?: { id: string; role: string };
  }
export const getUsers = async (req:  AuthenticatedRequest, res: Response) => {
    const adminId = req.user?.id ?? '';  // Assuming user info is in req.user from the auth middleware

  try {
    const users = await getAllUsers(adminId);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};

export const removeUser = async (req: AuthenticatedRequest, res: Response) => {
  const { userId } = req.params;

  try {
    await deleteUser(userId);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error deleting user' });
  }
};
