import { ApiErrorCode } from './errorCode.enum';
import { ApiErrorMessage } from './errorMessage.enum';

import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiException extends HttpException {
    private errorMessage: ApiErrorMessage
    private errorCode: ApiErrorCode

    constructor(errorObject: { message: ApiErrorMessage, errorCode: ApiErrorCode }, statusCode: HttpStatus) {
        super(errorObject, statusCode);
        this.errorCode = errorObject.errorCode
        this.errorMessage = errorObject.message
    }

    getErrorCode(): ApiErrorCode {
        return this.errorCode
    }

    getErrorMessage(): ApiErrorMessage {
        return this.errorMessage
    }
}