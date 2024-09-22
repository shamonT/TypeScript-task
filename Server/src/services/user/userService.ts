import User, { IUser } from '../../models/User';

export const getAllUsers = async (adminId: string) => {
  return User.find({ _id: { $ne: adminId }, role: 'user' }); // Admin can't see himself
};

export const getUserById = async (userId: string) => {
  return User.findById(userId);
};

export const deleteUser = async (userId: string) => {
  return User.findByIdAndDelete(userId);
};
