import {
  FastifyBaseLogger,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerBase,
  RawServerDefault,
} from 'fastify';

/* eslint-disable @typescript-eslint/no-unused-vars */
declare module 'fastify' {
  export interface FastifyInstance<
    RawServer extends RawServerBase = RawServerDefault,
    RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
    RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
    Logger = FastifyBaseLogger
  > {
    config: object;
  }
}

import { fastify } from 'fastify';
import fastifyCors from '@fastify/cors';
import pino from 'pino';
import { swagger } from './swagger';
import apiV0 from './api/v0';

export const build = async (config: object = {}) => {
  const server = fastify({
    logger: pino({ level: 'info' }),
    exposeHeadRoutes: true,
    caseSensitive: false,
  });

  server.register(fastifyCors, {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  server.decorate('config', config);
  //server.register(db);
  server.register(swagger);
  server.register(apiV0, { prefix: '/api/v0' });
  server.get('/', async function (request, reply) {
    try {
      return reply.code(200).send('api server');
    } catch (error) {
      return reply.send(500);
    }
  });
  return server;
};

export const localIP = ['local', 'test'].includes(process.env.NODE_ENV as string) ? '127.0.0.1' : '0.0.0.0';
export const port = Number(process.env.PORT ?? 8080);
