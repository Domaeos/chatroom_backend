import mongoose from "mongoose";
mongoose.Promise = global.Promise;

const db = {
    mongoose: mongoose,
    user: require('./user.model'),
    role: require('./role.model'),
    ROLES: ["user", "admin", "moderator"]
}

export default db;