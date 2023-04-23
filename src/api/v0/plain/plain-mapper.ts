import { FastifyRequest } from 'fastify';
import { PlainBody, PlainParams, PlainQuery } from './plain-mapper.interface';

export class PlainMapper {
  parsePlainParams(req: FastifyRequest) {
    return <PlainParams>req.params;
  }

  parsePlainQuery(req: FastifyRequest) {
    return <PlainQuery>req.query;
  }

  parsePlainBody(req: FastifyRequest) {
    return <PlainBody>req.body;
  }
}
