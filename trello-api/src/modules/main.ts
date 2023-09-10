import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  function setupSwagger(app: NestExpressApplication) {
    const builder = new DocumentBuilder()
      .setTitle('TRELLO API')
      .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token');

    SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, builder.build()), {
      swaggerOptions: { defaultModelsExpandDepth: -1, persistAuthorization: true },
    });
  }

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  setupSwagger(app);
  await app.listen(config.PORT);
}
bootstrap();
