import { Document } from 'mongoose';
export interface IUser extends Document {
	readonly name: string;
	readonly vendor: string;
	readonly email: string;
	readonly password: string;
	readonly created_at: Date;
}