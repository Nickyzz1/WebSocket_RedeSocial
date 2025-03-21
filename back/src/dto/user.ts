import {iMessage} from './message.ts'

export interface iUser {
    name : string,
    email : string,
    password : string,
    image : string,
    message : iMessage
}