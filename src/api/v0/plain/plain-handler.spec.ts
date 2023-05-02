import { FastifyInstance } from 'fastify';
import { build } from '@server';
const mockIds: number[] = [];

describe('plain crud', () => {
  let server!: FastifyInstance;
  beforeAll(async () => {
    server = await build();
  });
  afterAll(async () => {
    await server.close();
  });
  test('create plain', async () => {
    for (let i = 0; i < 10; i++) {
      const res = await server.inject({
        method: 'POST',
        url: '/api/v0/plains',
        payload: {
          site: 'site',
          type: 'type',
          state: 'NORMAL',
          name: `plain-${i}`,
        },
      });
      expect(res.statusCode).toEqual(200);
      mockIds.push(JSON.parse(res.body).id);
    }
  });
  test('find plain', async () => {
    const res = await server.inject({
      method: 'GET',
      url: `/api/v0/plains`,
    });
    expect(res.statusCode).toEqual(200);
    expect(JSON.parse(res.body).length).toEqual(10);
  });
  test('get plain', async () => {
    const res = await server.inject({
      method: 'GET',
      url: `/api/v0/plains/${mockIds[0]}`,
    });
    expect(res.statusCode).toEqual(200);
    expect(JSON.parse(res.body).id).toEqual(mockIds[0]);
  });
  test('update plain', async () => {
    const res = await server.inject({
      method: 'PUT',
      url: `/api/v0/plains/${mockIds[0]}`,
      payload: {
        site: 'site',
        type: 'type',
        state: 'NORMAL',
        name: `change-plain`,
      },
    });
    expect(res.statusCode).toEqual(200);
    expect(JSON.parse(res.body).name).toEqual('change-plain');
  });
  test('delete plain', async () => {
    const res = await server.inject({
      method: 'DELETE',
      url: `/api/v0/plains/${mockIds[0]}`,
    });
    expect(res.statusCode).toEqual(200);
    expect(JSON.parse(res.body).msg).toEqual(`${mockIds[0]} is removed`);
  });
});
