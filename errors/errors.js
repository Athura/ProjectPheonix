const HTTPStatus = require('http-status');

export default {
    INVALID_REQUEST: {
        message: 'Request was invalid',
        httpStatus: HTTPStatus.BAD_REQUEST
    },
    NOT_FOUND: {
        message: 'Requested resource was not found',
        httpStatus: HTTPStatus.NOT_FOUND
    },
    UNAUTHORIZED: {
        message: 'Access to resource was denied',
        httpStatus: HTTPStatus.FORBIDDEN
    },
    ERROR: {
        message: 'An error occurred while executing the request',
        httpStatus: HTTPStatus.INTERNAL_SERVER_ERROR
    },
    VALIDATION_ERROR: {
        message: 'Request was invalid',
        httpStatus: HTTPStatus.BAD_REQUEST
    },
    CRITERIA_NOT_FOUND: {
        message: 'Specified criteria does not exist or does not belong to specified user',
        httpStatus: HTTPStatus.NOT_FOUND
    },
    RESTAURAUNT_NOT_FOUND: {
        message: 'Provided restaurant does not exist',
        httpStatus: HTTPStatus.NOT_FOUND
    },
    USER_NOT_FOUND: {
        message: 'Specified user was not found',
        httpStatus: HTTPStatus.NOT_FOUND
    }
};