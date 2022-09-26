import { Document } from 'mongoose';
export interface IVendor extends Document {
	readonly vendor: string;
	readonly created_at: Date;
}