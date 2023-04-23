import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

const getHost = () => (['local', 'test'].includes(process.env.NODE_ENV as string) ? '127.0.0.1' : '');
const getPort = () => (['local', 'test'].includes(process.env.NODE_ENV as string) ? '8080' : 443);
const getSchemes = () => (['local', 'test'].includes(process.env.NODE_ENV as string) ? 'http' : 'https');
export const swagger: FastifyPluginAsync = fp(async (server: FastifyInstance) => {
  server.register(fastifySwagger, {
    mode: 'dynamic',
    swagger: {
      basePath: '/api',
      info: {
        title: 'Test swagger',
        description: 'testing the fastify swagger api',
        version: '0.1.1',
      },
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          description: `Enter your bearer token in the format Bearer $access_token_value
          \n 관리자 : bearer access_token`,
          name: 'authorization',
          in: 'header',
        },
      },
      host: `${getHost()}:${getPort()}`,
      schemes: [getSchemes()],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    hideUntagged: true,
  });
  server.register(fastifySwaggerUi, {
    routePrefix: '/documentation',
    uiConfig: {
      defaultModelRendering: 'model',
      defaultModelsExpandDepth: 3,
    },
  });
});
