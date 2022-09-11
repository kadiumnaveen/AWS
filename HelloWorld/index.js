exports.handler = async (event, context) => {
    // TODO implement
    console.log(event)
    console.log(context)
    console.log(context.getRemainingTimeInMillis())//invoke if it is a method using "()"
    
    let statusCode = 200
    
    let todo = {
        id : "100",
        description :"Became AWS Certified",
        isDone : false
    }
    
    let headers = {
        contentType : "application/json"
    }
    
    let body = JSON.stringify(todo)
    
    const response = {
        statusCode,
        body,
        headers
    };
    return response;
};
