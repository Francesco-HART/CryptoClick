import { DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

export const swaggerPath = 'api/doc';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Crypto Click REST API')
  .setVersion('1.0')
  .addBearerAuth()
  .addCookieAuth('jwt')
  .build();

export const swaggerOptions: SwaggerDocumentOptions = {};
