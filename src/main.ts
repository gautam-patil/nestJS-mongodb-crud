import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { StudentModule } from './student/student.module'
import { UserModule } from './user/user.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))

  const option = new DocumentBuilder()
    .setTitle('Title')
    .setDescription("Descriptionn")
    .setVersion('1.0')
    .addTag('Tagggg')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .build();

    const document = SwaggerModule.createDocument(app, option);
    SwaggerModule.setup('api', app, document);
    
  await app.listen(3000);
}
bootstrap();
