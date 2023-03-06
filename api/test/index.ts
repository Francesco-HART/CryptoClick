import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { MongoExceptionsFilter } from '../src/infrastructure/common/exceptions/MongoExceptionFilter';
import { UserModule } from '../src/infrastructure/modules/user.module';

import { rootMongooseTestModule } from './mongo.mock';
import * as cookieParser from 'cookie-parser';
import { AuthModule } from '../src/infrastructure/modules/auth.module';

// import { MongoExceptionsFilter } from '../src/MongoExceptionsFilter';

export const initApp = async (
  module: TestingModule,
): Promise<INestApplication> => {
  const app = module.createNestApplication();
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new MongoExceptionsFilter());
  await app.init();
  return app;
};

export const createTestingModule = async () => {
  return await Test.createTestingModule({
    imports: [
      rootMongooseTestModule(),
      ConfigModule.forRoot({
        isGlobal: true,
        cache: true,
        envFilePath: '.test.env',
      }),
      UserModule,
      AuthModule,
    ],
  }).compile();
};
