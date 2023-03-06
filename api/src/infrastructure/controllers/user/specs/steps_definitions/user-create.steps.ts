import { INestApplication } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { closeInMongodConnection } from '../../../../../../test/mongo.mock';
import { createTestingModule, initApp } from '../../../../../../test/index';
import { CreateUserUseCase } from '../../../../../use-cases/user/create-user.usecase';
import { UserModel } from '../../../../../domain/models/user';
//import { create_bob_admin_mock, create_lea_user_mock } from '../user.mocks';
import { CreateUserDTO } from '../../user.dto';
import * as request from 'supertest';

// const feature = loadFeature(
//   '../api/src/infrastructure/controllers/user/specs/features/user-create.feature',
// );

describe('CreateUserSteps', () => {
  let app: INestApplication;
  let userDTO: CreateUserDTO;
  let cookie;
  let createUserUseCase: CreateUserUseCase;
  let bobAdmin: UserModel;
  let leaUser: UserModel;
  beforeAll(async () => {
    const module: TestingModule = await createTestingModule();
    createUserUseCase = module.get<CreateUserUseCase>(CreateUserUseCase);
    app = await initApp(module);
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });

  beforeEach(() => {
    userDTO = new CreateUserDTO();
  });

  // defineFeature(feature, (test) => {
  //   const backgroud = ({ given }) => {
  //     given("l'admin Bob et l'utilisateur Lea existent", async () => {
  //       if (!bobAdmin) {
  //         const dto = { ...create_bob_admin_mock };
  //         bobAdmin = await createUserUseCase.execute(dto);
  //       }

  //       if (!leaUser) {
  //         const dto = { ...create_lea_user_mock };
  //         leaUser = await createUserUseCase.execute(dto);
  //       }
  //     });
  //   };

  //   test('échec - non respect des champs obligatoires : (login, address)', ({
  //     given,
  //     when,
  //     and,
  //     then,
  //   }) => {
  //     backgroud({ given });
  //     when(/^je renseigne un login:(.*)$/, (arg0) => {
  //       userDTO.login = arg0;
  //     });

  //     and(/^un mot de address:(.*)$/, (arg0) => {
  //       userDTO.address = arg0;
  //     });

  //     then('je reçois une erreur', async () => {
  //       const res = await request(app.getHttpServer())
  //         .post('/auth')
  //         .send({
  //           login: create_bob_admin_mock.login,
  //           address: create_bob_admin_mock.address,
  //         })
  //         .expect(201);

  //       cookie = res.header['set-cookie'];

  //       return request(app.getHttpServer())
  //         .post('/users')
  //         .set('cookie', cookie)
  //         .send(userDTO)
  //         .expect(400);
  //     });
  //   });

  //   test('succès', ({ given, when, and, then }) => {
  //     backgroud({ given });

  //     given('je suis connecté en tant que Bob', async () => {
  //       const res = await request(app.getHttpServer())
  //         .post('/auth')
  //         .send({
  //           login: create_bob_admin_mock.login,
  //           address: create_bob_admin_mock.address,
  //         })
  //         .expect(201);

  //       cookie = res.header['set-cookie'];
  //     });

  //     when("je renseigne l'login: x-", () => {
  //       userDTO.login = 'coding@coding.fr';
  //     });

  //     and(/^le model de address: user(.*)$/, (arg0) => {
  //       userDTO.address = 'user12345!';
  //     });

  //     and('la nom: Bart', () => {
  //       //TODO
  //     });

  //     then("l'utilisateur est créée et sauvegardée", async () => {
  //       const res = await request(app.getHttpServer())
  //         .post('/users')
  //         .set('cookie', cookie)
  //         .send(userDTO)
  //         .expect(201);
  //       expect(res.body).toHaveProperty('login', 'coding@coding.fr');
  //     });
  //   });

  //   test("échec - création d'un utilisateur sans être admin'", ({
  //     given,
  //     when,
  //     and,
  //     then,
  //   }) => {
  //     backgroud({ given });

  //     given('je suis connecté en tant que Lea', async () => {
  //       const res = await request(app.getHttpServer())
  //         .post('/auth')
  //         .send({
  //           login: create_lea_user_mock.login,
  //           address: create_lea_user_mock.address,
  //         })
  //         .expect(201);

  //       cookie = res.header['set-cookie'];
  //     });

  //     when("je renseigne l'login: ABCD", () => {
  //       userDTO.login = 'coding@coding.fr';
  //     });

  //     and(/^je renseigne le mot de address: admin(.*)$/, (arg0) => {
  //       userDTO.address = 'admin12345!';
  //     });

  //     then(/^je reçois une erreur (.*)$/, async (arg0) => {
  //       const res = await request(app.getHttpServer())
  //         .post('/users')
  //         .set('cookie', cookie)
  //         .send(userDTO)
  //         .expect(403);
  //     });
  //   });

  //   test("échec - création d'un utilisateur sans être connecté'", ({
  //     when,
  //     and,
  //     then,
  //     given,
  //   }) => {
  //     backgroud({ given });
  //     when("je renseigne l'login: ABCD", () => {
  //       userDTO.login = 'coding@coding.fr';
  //     });

  //     and(/^je renseigne le mot de address: admin(.*)$/, (arg0) => {
  //       userDTO.address = 'admin12345!';
  //     });

  //     then(/^je reçois une erreur (.*)$/, async (arg0) => {
  //       const res = await request(app.getHttpServer())
  //         .post('/users')
  //         .send(userDTO)
  //         .expect(401);
  //     });
  //   });
  // });
});
