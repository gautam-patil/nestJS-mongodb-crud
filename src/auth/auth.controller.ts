import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

	constructor(private AuthService: AuthService){}

	@Post('signin')
	signin(@Body() dto: AuthDto) {
		return this.AuthService.signin(dto)
	}
}
