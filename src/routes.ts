import { Router } from 'express'
import { AuthenticateUserConstroller } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { CreateTagController } from './controllers/CreateTagConstroller'
import { CreateUserController } from './controllers/CreateUserController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { ListUsersController } from './controllers/ListUsersController'
import {ListUserSendComplimentsController} from "./controllers/ListUserSendComplimentsController"
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { ListUserReceiveComplimentsService } from './services/ListUserReceiveComplimentsService'
import { ListUserSendComplimentsService } from './services/ListUserSendComplimentsService'


const router = Router()
const createUsercontroller = new CreateUserController()
const createTagController= new CreateTagController()
const authenticateUserConstroller = new AuthenticateUserConstroller()
const createComplimentController = new CreateComplimentController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listUserSendComplimentsController= new ListUserSendComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

router.post("/users", createUsercontroller.handle);
router.post("/tags",ensureAuthenticated,ensureAdmin,createTagController.handle);
router.post("/login",authenticateUserConstroller.handle);
router.post("/compliments",ensureAuthenticated,createComplimentController.handle);


router.get("/users/compliments/send",ensureAuthenticated,listUserSendComplimentsController.handle)
router.get("/users/compliments/receive",ensureAuthenticated,listUserReceiveComplimentsController.handle)
router.get("/tags",listTagsController.handle)
router.get("/users",ensureAuthenticated,listUsersController.handle)
export { router }