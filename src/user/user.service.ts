import { Global, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO, UpdateUserDto } from "./dto";
import { IUser } from './interface'
import * as argon from "argon2"

@Injectable()
export class UserService {

	constructor(@InjectModel('User') private UserModel : Model<IUser>){}

	async create(CreateUserDTO: CreateUserDTO): Promise<IUser> {

		CreateUserDTO.password = await argon.hash(CreateUserDTO.password);
		const createUser = new this.UserModel(CreateUserDTO);
		return createUser.save();
	}

	async allUser(): Promise<IUser[]> {
		const user =  await this.UserModel.find();
		return user;
	}

	async update(id: string, UpdateUserDto: UpdateUserDto): Promise<IUser> {

		const user = await this.UserModel.findByIdAndUpdate(id, UpdateUserDto, { new: true })
		return user;
	}

	async findUserById(id: string): Promise<IUser> {

		const user = await this.UserModel.findById(id);
		return user;
	}

	async findUserByEmail(email: string): Promise<IUser> {

		const user = await this.UserModel.findOne({email: email});
		return user;
	}

	async delete(id: string): Promise<IUser> {
		
		const user = await this.UserModel.findByIdAndDelete(id);
		return user
	}

	async createVendor(CreateUserDTO: CreateUserDTO): Promise<IUser> {
		const createVendor = new this.UserModel(CreateUserDTO);
		return createVendor.save();
	}
}
