import express from 'express';
import { login, register } from '../../controllers/authController'
const router = express.Router();

// Routes for authentication
router.post('/login', login);    // User login
router.post('/register', register);  // User registration

export default router;
