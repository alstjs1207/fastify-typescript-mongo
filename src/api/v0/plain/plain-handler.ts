import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { PlainMapper } from '@api/v0/plain/plain-mapper';
import { DEFAULT_SCHEMA } from '@lib/common/schema';
import { PlainService } from '@service/plain/plain-service';

export class PlainHandler {
  server: FastifyInstance;
  options: FastifyPluginOptions;
  routePath: string;
  routePrefix: string;
  mapper: PlainMapper;
  service: PlainService;
  schema: {
    GET: object;
    GET_ID: object;
    POST: object;
    PUT: object;
    DELETE: object;
  };

  constructor(server: FastifyInstance, options: FastifyPluginOptions, mapper: PlainMapper, service: PlainService) {
    this.server = server;
    this.options = options;
    this.mapper = mapper;
    this.service = service;
    this.routePath = `/plains`;
    this.schema = DEFAULT_SCHEMA('plains');
  }

  protected getOptions = (Schema: object): object => {
    return Object.assign(Schema, { prefix: this.routePrefix });
  };

  protected ping = (schema: object) => {
    this.server.get('/.ping', this.getOptions(schema), async () => {
      return 'pong';
    });
  };

  protected find = (schema: object) => {
    this.server.get(`${this.routePath}`, this.getOptions(schema), async (request, reply) => {
      return this.service.find();
    });
  };

  protected get = (schema: object) => {
    this.server.get(`${this.routePath}/:id`, this.getOptions(schema), async (request, reply) => {
      const params = this.mapper.parsePlainParams(request);
      return this.service.getById(params.id);
    });
  };

  protected create = (schema: object) => {
    this.server.post(`${this.routePath}`, this.getOptions(schema), async (request, reply) => {
      const command = this.mapper.parsePlainBody(request);
      return this.service.save(command);
    });
  };

  protected modify = (schema: object) => {
    this.server.put(`${this.routePath}/:id`, this.getOptions(schema), async (request, reply) => {
      const { id, body } = this.mapper.parsePlainCommand(request);
      return this.service.modify(id, body);
    });
  };

  protected delete = (schema: object) => {
    this.server.delete(`${this.routePath}/:id`, this.getOptions(schema), async (request, reply) => {
      const params = this.mapper.parsePlainParams(request);
      const id = await this.service.remove(params.id);
      return { msg: `${id} is removed` };
    });
  };

  public bindRoute = () => {
    this.ping(this.schema.GET);
    this.find(this.schema.GET);
    this.get(this.schema.GET_ID);
    this.create(this.schema.POST);
    this.modify(this.schema.PUT);
    this.delete(this.schema.DELETE);
  };
}
