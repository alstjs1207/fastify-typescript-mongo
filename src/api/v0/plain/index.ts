import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { PlainMapper } from './plain-mapper';
import { PlainHandler } from './plain-handler';

const makeRoute = () => {
  const route = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    const plainMapper = new PlainMapper();
    const uris = new PlainHandler(server, options, plainMapper);
    await uris.bindRoute();
  };
  return route;
};

export default makeRoute();
