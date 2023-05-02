import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { PlainDao } from '@dao/plain/plain-dao';
import { COLLECTIONS, SEQUENCE_KEY } from '@policy';
import { PlainService } from '@service/plain/plain-service';
import { PlainMapper } from './plain-mapper';
import { PlainHandler } from './plain-handler';

const makeRoute = () => {
  const route = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    const plainDao = new PlainDao({
      key: SEQUENCE_KEY.PLAINS,
      mongo: server.db,
      collection: COLLECTIONS.PLAINS,
      sequence: COLLECTIONS.SEQUENCES,
    });
    const plainService = new PlainService(plainDao);
    const plainMapper = new PlainMapper();
    const uris = new PlainHandler(server, options, plainMapper, plainService);
    uris.bindRoute();
  };
  return route;
};

export default makeRoute();
