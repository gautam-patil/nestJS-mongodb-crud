import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateStudentDTO } from "./dto"
import { StudentService } from "./student.service"

@Controller('student')
export class StudentController {

	constructor(private readonly StudentService: StudentService){}

	@Post('/create')
	async addUser(@Res() res, @Body() CreateStudentDTO: CreateStudentDTO){

		const user = await this.StudentService.create(CreateStudentDTO);
		return res.status(HttpStatus.OK).json({
			message: "User Created",
			user
		})
	}

	@Get('/allUser')
	async allUser(@Res() res){
		const user = await this.StudentService.allStudent();
		return res.status(HttpStatus.OK).json({
			message: "All User list",
			user
		})
	}
}
