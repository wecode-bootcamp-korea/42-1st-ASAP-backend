const request = require('supertest');

const { createApp } = require('../app');
const AppDataSource = require('../models/dataSource');

describe('Sign Up', () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await AppDataSource.initialize();
  });

  afterAll(async () => {
    await AppDataSource.query(`SET FOREIGN_KEY_CHECKS=0`);
    await AppDataSource.query(`TRUNCATE users`);
    await AppDataSource.query(`SET FOREIGN_KEY_CHECKS=1`);
    await AppDataSource.destroy();
  });

  test('SUCCESS: created user', async () => {
    const response = await request(app).post('/users/signup').send({
      email: 'rightemail@email.com',
      password: 'Password001@',
      firstname: '스트',
      lastname: '테',
    });
    expect(response, 200);
  });

  test('FAILED: INVALID EMAIL', async () => {
    await request(app).post('/users/signup').send({
      email: 'wrongEmail',
      password: 'Password001@',
      firstname: '스트',
      lastname: '테',
    });
    //   .expect(400)
    //   .expect({ message: 'invaild email!!' });
  });

  test('FAILED: duplicated email', async () => {
    await request(app).post('/users/signup').send({
      email: 'rightemail@email.com',
      password: 'Password001@',
      firstname: '스트',
      lastname: '테',
    });
    //   .expect(409)
    //   .expect({ message: 'duplicated email' });
  });
});
