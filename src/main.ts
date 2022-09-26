import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { StudentModule } from './student/student.module'
import { UserModule } from './user/user.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const option = new DocumentBuilder()
    .setTitle('Title')
    .setDescription("Descriptionn")
    .setVersion('1.0')
    .addTag('Tagggg')
    .build();

    const document = SwaggerModule.createDocument(app, option, {
      include: [StudentModule, UserModule]
    });
    SwaggerModule.setup('api', app, document);
    
  await app.listen(3000);
}
bootstrap();
