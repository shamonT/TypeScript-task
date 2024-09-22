import { Request, Response } from 'express';
import { loginUser, registerUser } from '../services/auth/authService';

export const register = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, role } = req.body;

  try {
    const user = await registerUser(firstName, lastName, email, password, role);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    if (err instanceof Error) {
        
        res.status(500).json({ message: err.message });
      } else {
    
        res.status(500).json({ message: 'An unknown error occurred' });
      }
    // res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
console.log(email, password);

  try {
    const { token, role } = await loginUser(email, password);
    res.json({ token, role });
  } catch (err) {
    if (err instanceof Error) {
       
        res.status(500).json({ message: err.message });
      } else {
       
        res.status(500).json({ message: 'An unknown error occurred' });
      }
  
  }
};
