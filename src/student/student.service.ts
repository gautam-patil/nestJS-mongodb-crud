import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose"
import { CreateStudentDTO } from "./dto"
import { IStudent } from "./interface"

@Injectable()
export class StudentService {

	constructor(@InjectModel('Student') private StudentModel: Model<IStudent>){}

	async create(CreateStudentDTO: CreateStudentDTO): Promise<IStudent> {

		const createStudent = new this.StudentModel(CreateStudentDTO);
		return createStudent.save();
	}

	async allStudent(): Promise<IStudent[]> {
		const student =  await this.StudentModel.find();
		return student;
	}
}
