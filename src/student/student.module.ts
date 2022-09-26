import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from "./schema"
import { StudentController } from './student.controller'
import { StudentService } from "./student.service";

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema}])
	],
	controllers: [StudentController],
	providers: [StudentService]
})
export class StudentModule {}
