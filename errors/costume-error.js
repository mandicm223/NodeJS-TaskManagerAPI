class CustomAPIError extends Error {
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCostumeError = (msg , statusCode) => {
    return new CustomAPIError(msg, statusCode)
}

module.exports = {createCostumeError , CustomAPIError}