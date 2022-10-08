import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from "@nestjs/jwt";
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
	constructor(
		private UserService: UserService,
		private jwt: JwtService
	){}

	async signin(dto: AuthDto){

		const user = await this.UserService.findUserByEmail(dto.email);

		if (!user){
			throw new ForbiddenException(
				'Credentials  incorrect',
			)
		}

		const pwMatch = await argon.verify(user.password, dto.password);
		if(!pwMatch){
			throw new ForbiddenException(
				'Credentials  incorrect',
			)
		}

		return await this.signToken(user._id, user.email);

	}

	async signToken(userId: string, email: string): Promise<{accessToken: string}>{
		const payload = {
			sub: userId,
			email
		}

		const token = await this.jwt.signAsync(payload, {secret: "secret"})

		return {
			accessToken: token,
		}
	}
}
