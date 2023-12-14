export interface IDBConfig {
    HOST: String,
    PORT: Number,
    DB: String
}

export const dbConfig: IDBConfig = {
    HOST: "0.0.0.0",
    PORT: 27017,
    DB: "chatroom_db"
}
