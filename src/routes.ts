import { Router } from 'express'
import { CreateTagController } from './controllers/CreateTagConstroller'
import { CreateUserController } from './controllers/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'


const router = Router()
const createUsercontroller = new CreateUserController()
const createTagController= new CreateTagController()


router.post("/users", createUsercontroller.handle);
router.post("/tags",ensureAdmin,createTagController.handle);



export { router }