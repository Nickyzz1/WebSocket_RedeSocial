export interface iUser {
    name : string,
    email : string,
    password : string,
    image : string,
    followers : string[],
    following : string[],
    privacy  : number // enum 1 e 0
}