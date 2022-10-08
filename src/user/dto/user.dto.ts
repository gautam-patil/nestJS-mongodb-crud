import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserDTO {

	@ApiProperty()
	@IsString()
    @MaxLength(30)
    @IsNotEmpty()
	readonly name: string;

	@ApiProperty()
	readonly vendor: string;

	@ApiProperty()
	@IsEmail()
	readonly email: string;

	@ApiProperty()
	@IsString()
	password: string;
}