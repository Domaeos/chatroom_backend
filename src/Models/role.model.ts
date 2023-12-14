import mongoose from "mongoose";
import { Schema, model } from "mongoose";

export interface IRole extends Document {
  name: string
}

const RoleSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true }
})

const Role =  model<IRole>('IRole', RoleSchema);

export default Role
