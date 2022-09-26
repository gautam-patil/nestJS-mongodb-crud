import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UserSchema = new mongoose.Schema({
	name: String,
	vendor: String
});