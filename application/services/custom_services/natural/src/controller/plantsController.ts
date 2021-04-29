import { Request, Response } from 'express';
import { plantsService } from '../service/plantsService';
import { CustomLogger } from '../config/Logger'
let plants = new plantsService();

export class plantsController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
plants.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into plantsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from plantsController.ts: GpCreate');
    })}


}