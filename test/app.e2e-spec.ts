import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { PrismaService } from '../src/prisma/prisma.service';
import { AppModule } from '../src/app.module';

import * as pactum from 'pactum';
import { AuthDto } from '../src/auth/dto';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);
    await prisma.cleanDB();
    pactum.request.setBaseUrl('http://localhost:3333');
  });

  afterAll(() => app.close());

  it.todo('should pass');

  describe('Auth', () => {
    const dto: AuthDto = {
      email: 'test@gmail.com',
      password: '123',
    };
    describe('Signup', () => {
      it('Should signup', () => {
        return pactum
          .spec()
          .post(`/auth/signup`)
          .withBody(dto)
          .expectStatus(201);
      });
    });

    describe('Signin', () => {
      it('Should signin', () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody(dto)
          .expectStatus(200)
          .stores('token', 'access_token');
      });
    });
  });
  describe('User', () => {
    describe('Get user', () => {
      it('Should get current user', () => {
        return pactum
          .spec()
          .get(`/users/me`)
          .withHeaders({
            Authorization: 'Bearer $S{token}',
          })
          .expectStatus(200);
      });
    });

    describe('Edit user', () => {
      it.todo('Should edit user');
    });
  });
  describe('BodyWeight', () => {
    describe('Log bodyweight ', () => {
      it.todo('Should log bodyweight');
    });
    describe('Get bodyweight', () => {
      it.todo('Should get bodyweight');
    });
    describe('Get bodyweight by date', () => {
      it.todo('Should get bodyweight by date');
    });
    describe('Edit bodyweight', () => {
      it.todo('Should edit bodyweight');
    });
    describe('Delete bodyweight', () => {
      it.todo('Should delete bodyweight');
    });
  });
});
