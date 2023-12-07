import { BaseError } from "./BaseError";

export class BadRequestError extends BaseError{
    constructor(
        message: string = "requisition invalid"
    ){
        super(400, message)
    }
}