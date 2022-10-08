import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { CreateUserDTO, UpdateUserDto } from './dto';
import { UserService } from "./user.service";

@ApiTags('user')
@Controller('user')
export class UserController {

	constructor(private readonly UserService: UserService){}

	@Post('/create')
	@ApiResponse({ status: 201, description: 'The record has been successfully created.'})
	@ApiResponse({ status: 403, description: 'Forbidden.'})
	async addUser(@Res() res, @Body() CreateUserDTO: CreateUserDTO){

		console.log(CreateUserDTO)
		const user = await this.UserService.create(CreateUserDTO);
		return res.status(HttpStatus.OK).json({
			message: "User Created",
			user
		})
	}

	@UseGuards(JwtGuard)
	@ApiBearerAuth('JWT-auth')
	@Get('/allUser')
	async allUser(@GetUser('id') userId: string, @Res() res){
		const user = await this.UserService.allUser();
		return res.status(HttpStatus.OK).json({
			message: "All User list",
			user
		})
	}

	@Put('/update/:id')
	@ApiResponse({ status: 201, description: 'Update User'})
	@ApiResponse({ status: 404, description: 'Id not exist'})
	async update(@Res() res, @Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto){
		
		try{

			const user = await this.UserService.update(id,  UpdateUserDto);
			if(!user){
				throw new NotFoundException('Id not exist')
			}
	
			return res.status(HttpStatus.OK).json({
				message: "Update User",
				user
			})
		}catch(error){

			return res.status(HttpStatus.NOT_FOUND).json({
				message: error?.message
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
	async addVendor(@Res() res, @Body() CreateUserDTO: CreateUserDTO){

		const user = await this.UserService.createVendor(CreateUserDTO);
		return res.status(HttpStatus.OK).json({
			message: "User Created",
			user
		})
	}

}
