import { Request, Response } from 'express';
import {plantsDao} from '../dao/plantsDao';
import { CustomLogger } from '../config/Logger'
let plants = new plantsDao();

export class plantsService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into plantsService.ts: GpCreate')
     const  plantsData = req.body;
     plants.GpCreate(plantsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from plantsService.ts: GpCreate')
         callback(response);
         });
    }


}