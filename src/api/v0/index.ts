import { FastifyInstance, FastifyPluginOptions, FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import fs from 'fs';

const getDirectory = () => {
  const currentDirectory = fs.readdirSync(__dirname);
  return currentDirectory.filter((name) => !name.includes('.js'));
};
const IndexRoute: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
  const directory = getDirectory();
  server.register(async (childServer) => {
    for (const name of directory) {
      childServer.register(await import(`./${name}`), options);
    }
  });
};

export default fp(IndexRoute);
