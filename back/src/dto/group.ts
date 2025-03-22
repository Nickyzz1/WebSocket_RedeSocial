export interface iGroup {
    id: string,
    name : string,
    admin : string, // id of admin
    members : string[], // id of users
    createdAt : Date
}