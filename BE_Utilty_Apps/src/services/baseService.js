class BaseService{
    constructor(model){
        this.model=model;
    }
    async create(data){
        return this.model.create(data);
    }
}
module.exports=BaseService;