import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'User', schema: UserSchema}])
	],
  	controllers: [UserController],
	providers: [UserService],
	exports: [UserService, MongooseModule.forFeature([{ name: 'User', schema: UserSchema}])]
})
export class UserModule {}
