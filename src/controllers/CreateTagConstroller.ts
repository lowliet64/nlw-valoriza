import {Request,Response} from "express"
import {CreateTagService} from "../services/CreateTagService"

class CreateTagController{

    async handle(request:Request,response:Response){
            const {name} =request.body
            const createTagSerice = new CreateTagService()
            const tag = await createTagSerice.execute(name)

            return response.json(name)
    }
}


export{CreateTagController}