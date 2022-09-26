import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDTO {

	@ApiProperty()
	readonly name: string;
}