import { Connection } from 'mongoose';
import { SequenceDocument } from '@lib/common/sequence-document';
import { plainSchema, sequenceSchema } from '../../schema';
import { BaseCrudDao } from '../base-crud-dao';

export class PlainDao extends BaseCrudDao {
  constructor({
    mongo,
    key,
    collection,
    sequence,
  }: {
    mongo: Connection;
    key: string;
    collection: string;
    sequence: string;
  }) {
    super(key, mongo.model(collection, plainSchema), mongo.model<SequenceDocument>(sequence, sequenceSchema));
  }
}
