const Errors = require('./errors');

class BaseError extends Error {
    constructor(code, message, stack) {
        super(code);
        this.name = this.constructor.name;
        this.code = code;
        this.message = message;
        this.stack = stack;
    }
}

export default class APIError extends BaseError {
    constructor(code = 'ERROR', props, stack) {
        const { message, publicApi = true, httpStatus } = Errors[code] ? Errors[code] : Errors.ERROR;
        super(code, message, stack);
        this.httpStatus = httpStatus;
        this.isPublic = publicApi;
        this.properties = props;
    }

    getErrorDetails() {
        const code = this.publicApi ? this.code : 'ERROR';
        const message = this.isPublic ? this.message : Errors.ERROR.message;
        return { code, message, ...this.properties };
    }
}