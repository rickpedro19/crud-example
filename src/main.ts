import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {cors: true});

  const config = new DocumentBuilder()
    .addSecurity('bearer', {
      type: 'http',
      scheme: 'bearer',
    })
    .setTitle('Document issuer services')
    .setDescription('documentation on progress')
    .setVersion('1.0')
    .addTag('Tags')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000, '0.0.0.0');
  app.enableCors();
  console.log(`App is running on: ${await app.getUrl()}`);
  
}
bootstrap().catch((e) => {
  console.log(e);
  
});
