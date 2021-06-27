import { AuthenticateUserService } from "../services/AuthenticateUserService"
import {Request, Response} from "express"
class AuthenticateUserConstroller{
    async handle(request:Request,response:Response){
        const  {email, password} = request.body
        const authenticateUserService = new    AuthenticateUserService()

        const token = await authenticateUserService.execute({email,password})
        return response.json(token)
    }
}

export {AuthenticateUserConstroller}