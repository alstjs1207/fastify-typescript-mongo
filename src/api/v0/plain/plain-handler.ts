import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { PlainMapper } from '@api/v0/plain/plain-mapper';
import { DEFAULT_SCHEMA } from '@lib/common/schema';

export class PlainHandler {
  server: FastifyInstance;
  options: FastifyPluginOptions;
  routePath: string;
  routePrefix: string;
  mapper: PlainMapper;
  schema: {
    GET: object;
    GET_ID: object;
    POST: object;
    PUT: object;
    DELETE: object;
  };

  constructor(server: FastifyInstance, options: FastifyPluginOptions, mapper: PlainMapper) {
    this.server = server;
    this.options = options;
    this.mapper = mapper;
    this.routePath = `/plain`;
    this.schema = DEFAULT_SCHEMA('plain');
  }

  protected getOptions = (Schema: object): object => {
    return Object.assign(Schema, { prefix: this.routePrefix });
  };

  protected ping = (schema: object) => {
    this.server.get('/.ping', this.getOptions(schema), function () {
      return 'pong';
    });
  };

  public bindRoute = () => {
    this.ping(this.schema.GET);
  };
}
