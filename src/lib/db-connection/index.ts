import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import AppDataSource from '../../data-source';

const db: FastifyPluginAsync = async (server: FastifyInstance) => {
  try {
    const dataSource = AppDataSource;
    server.decorate('db', dataSource);
  } catch (error) {
    server.log.error(error);
  }
};

export default fp(db);
