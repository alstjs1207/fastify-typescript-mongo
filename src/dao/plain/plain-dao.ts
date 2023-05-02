import { Connection, Model } from 'mongoose';
import { plainSchema } from '@schema';
import { BaseCrudDao } from '../base-crud-dao';

export class PlainDao extends BaseCrudDao {
  protected readonly model: Model<any>;
  constructor(mongo: Connection, collection: string) {
    super(mongo.model(collection, plainSchema));
  }
}
