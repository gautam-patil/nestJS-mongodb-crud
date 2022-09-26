import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateUserDTO, CreateVendorDTO } from './dto';
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

	constructor(private readonly UserService: UserService){}

	@Post('/create')
	async addUser(@Res() res, @Body() CreateUserDTO: CreateUserDTO){

		const user = await this.UserService.create(CreateUserDTO);
		return res.status(HttpStatus.OK).json({
			message: "User Created",
			user
		})
	}

	@Get('/allUser')
	async allUser(@Res() res){
		const user = await this.UserService.allUser();
		return res.status(HttpStatus.OK).json({
			message: "All User list",
			user
		})
	}

	@Put('/update/:id')
	async update(@Res() res, @Param('id') id: string, @Body() CreateUserDTO: CreateUserDTO){
		
		try{

			const user = await this.UserService.update(id,  CreateUserDTO);
			if(!user){
				throw new NotFoundException('Id not exist')
			}
	
			return res.status(HttpStatus.OK).json({
				message: "Update User",
				user
			})
		}catch(error){

			return res.status(HttpStatus.BAD_REQUEST).json({
				message: error
			})
		}
	}

	@Delete('/delete/:id')
	async delete(@Res() res, @Param('id') id: string, @Body() CreateUserDTO: CreateUserDTO){
		
		const user = await this.UserService.delete(id);
		if(!user){
			throw new NotFoundException('Id not exist')
		}

		return res.status(HttpStatus.OK).json({
			message: "Delete User",
			user
		})
	}

	@Post('/create-vendor')
	async addVendor(@Res() res, @Body() CreateVendorDTO: CreateVendorDTO){

		const user = await this.UserService.createVendor(CreateVendorDTO);
		return res.status(HttpStatus.OK).json({
			message: "User Created",
			user
		})
	}

}
