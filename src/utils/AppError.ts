export class AppError{
    statuscode:number
    message:string

    constructor(message:string,statuscode:number =400){
        this.statuscode =statuscode
        this.message = message

    }
}