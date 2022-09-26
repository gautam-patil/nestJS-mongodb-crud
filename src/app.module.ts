import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gautam:gautam2408@cluster0.w9p6w.mongodb.net/?retryWrites=true&w=majority'),
    UserModule,
    StudentModule
  ]
})
export class AppModule {}
