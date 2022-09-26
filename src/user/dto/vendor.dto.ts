import { ApiProperty } from "@nestjs/swagger"

export class CreateVendorDTO {

	@ApiProperty()
	readonly vendor: string;
}