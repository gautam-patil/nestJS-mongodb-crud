import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from '../../user/user.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){
	constructor(
		private UserService: UserService,
	){
		super({
			jwtFromRequest:
			ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: "secret",
		})
	}

	async validate(payload: {
		sub: string,
		email: string
	}){
		const user = await this.UserService.findUserById(payload.sub)
		return user;
	}
}