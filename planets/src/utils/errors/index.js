class ClientError extends Error{
    constructor(message, statusCode=400){
        super(message);
        this.statusCode= statusCode;
    }
}

module.exports= {ClientError};// como objeto porque en el util.index sale como objeto.