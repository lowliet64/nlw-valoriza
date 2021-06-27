import { Router } from 'express'
import { AuthenticateUserConstroller } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { CreateTagController } from './controllers/CreateTagConstroller'
import { CreateUserController } from './controllers/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'


const router = Router()
const createUsercontroller = new CreateUserController()
const createTagController= new CreateTagController()
const authenticateUserConstroller = new AuthenticateUserConstroller()
const createComplimentController = new CreateComplimentController()
router.post("/users", createUsercontroller.handle);
router.post("/tags",ensureAdmin,createTagController.handle);
router.post("/login",authenticateUserConstroller.handle);
router.post("/compliments",createComplimentController.handle);


export { router }