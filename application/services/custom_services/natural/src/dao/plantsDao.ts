import * as mongoose from 'mongoose';
import plantsModel from '../models/plants';
import { CustomLogger } from '../config/Logger'


export class plantsDao {
    private plants = plantsModel;
    constructor() { }
public GpCreate(plantsData, callback){
new CustomLogger().showLogger('info', 'Enter into plantsDao.ts: GpCreate')
let temp = new plantsModel(plantsData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from plantsDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}