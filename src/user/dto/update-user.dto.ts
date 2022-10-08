import { PartialType } from '@nestjs/mapped-types'
import { CreateUserDTO } from "./user.dto";

export class UpdateUserDto extends PartialType(CreateUserDTO){}