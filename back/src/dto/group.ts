import { iUser } from "./user.ts"

export interface iGroup {
    name : string,
    users : iUser[],
    created : Date
}