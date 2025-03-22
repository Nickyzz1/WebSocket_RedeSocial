import { icomment } from "./comment.ts"

export interface iPost {
    id : string,
    title : string,
    content : string,
    image : string,
    owner : string, // id owner of post
    likes : string[], // users id who liked thats
    comments : icomment[],
    createdAt : Date
}