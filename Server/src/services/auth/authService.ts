import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User  from '../../models/User';

export const registerUser = async (firstName: string, lastName: string, email: string, password: string, role: 'admin' | 'user') => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    role,
  });

  await user.save();
  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

  return { token, role: user.role };
};
