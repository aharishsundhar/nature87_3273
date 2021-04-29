import { Request, Response, NextFunction } from "express";
import { plantsController } from '../controller/plantsController';


export class Routes {
    private plants: plantsController = new plantsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/plants').post(this.plants.GpCreate);
     }

}