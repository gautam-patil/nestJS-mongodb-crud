import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO, CreateVendorDTO } from "./dto";
import { IUser, IVendor } from './interface'

@Injectable()
export class UserService {

	constructor(@InjectModel('User') private UserModel : Model<IUser>){}

	async create(CreateUserDTO: CreateUserDTO): Promise<IUser> {
		const createUser = new this.UserModel(CreateUserDTO);
		return createUser.save();
	}

	async allUser(): Promise<IUser[]> {
		const user =  await this.UserModel.find();
		return user;
	}

	async update(id: string, CreateUserDTO: CreateUserDTO): Promise<IUser> {

		const user = await this.UserModel.findByIdAndUpdate(id, CreateUserDTO, { new: true })
		return user;
	}

	async delete(id: string): Promise<IUser> {
		
		const user = await this.UserModel.findByIdAndDelete(id);
		return user
	}

	async createVendor(CreateVendorDTO: CreateVendorDTO): Promise<IUser> {
		const createVendor = new this.UserModel(CreateVendorDTO);
		return createVendor.save();
	}
}
