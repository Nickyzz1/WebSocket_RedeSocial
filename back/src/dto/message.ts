
export enum AdresseeType {
    user = "user",
    group = "group"
}
export interface iMessage {
    description : string,
    adressee : string,
    created : Date,
    adresseeType : AdresseeType
}