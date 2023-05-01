import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { PlainMapper } from './plain-mapper';
import { PlainHandler } from './plain-handler';
import { PlainDao } from '../../../repository/plain/plain-dao';
import { COLLECTIONS } from '../../../policy';
import { PlainService } from '../../../service/plain/plain-service';

const makeRoute = () => {
  const route = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    const plainDao = new PlainDao(server.db, COLLECTIONS.PLAINS);
    const plainService = new PlainService(plainDao);
    const plainMapper = new PlainMapper();
    const uris = new PlainHandler(server, options, plainMapper, plainService);
    await uris.bindRoute();
  };
  return route;
};

export default makeRoute();
