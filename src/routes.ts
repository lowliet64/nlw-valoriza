import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'


const router = Router()
const createUsercontroller = new CreateUserController()

router.post("/users", createUsercontroller.handle)


export { router }