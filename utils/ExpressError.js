class ExpressError extends Error {
    constructor(statusCode,message){
        super();
        this.statusCode= statusCode;
        this.message=message;
    }
}1
module.exports=ExpressError;