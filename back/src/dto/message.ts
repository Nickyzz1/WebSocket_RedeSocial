
export enum AdresseeType {
    user = "user",
    group = "group"
}
export interface iMessage {
    id : string,
    description : string,
    adressee : string,
    created : Date,
    adresseeType : AdresseeType,
    image : string
}