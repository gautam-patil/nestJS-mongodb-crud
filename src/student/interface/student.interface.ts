import { Document } from 'mongoose';
export interface IStudent extends Document {
	readonly name: string;
	readonly rollNo: number;
	readonly created_at: Date;
}