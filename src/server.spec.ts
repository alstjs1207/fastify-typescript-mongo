import 'module-alias/register';
import { FastifyInstance } from 'fastify';
import { build } from '@server';

describe('test server', () => {
  let server!: FastifyInstance;
  beforeAll(async () => {
    server = await build();
  });
  afterAll(async () => {
    await server.close();
  });

  test('test server', async () => {
    const response = await server.inject({ method: 'GET', url: '/' });
    expect(response.statusCode).toEqual(200);
  });
});
