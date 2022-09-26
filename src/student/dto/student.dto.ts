import { ApiProperty } from "@nestjs/swagger"

export class CreateStudentDTO {

	@ApiProperty()
	readonly name: string;
	readonly rollNo: number;
}