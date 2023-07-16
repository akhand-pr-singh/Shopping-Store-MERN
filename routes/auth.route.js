import express from 'express';
import { registerController, loginController, testController } from '../controllers/auth.controller.js';
import { userController } from '../controllers/auth.controller.js';
import { isAdmin, requireSignIn } from '../middlewares/auth.middleware.js';

//router object
const router = express.Router();

//routing

//REGISTER || METHOD POST
router.post('/register', registerController);

//LOGIN || METHOD POST
router.post('/login', loginController);

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

//USERS || METHOD GET
router.get('/users', userController);

export default router;