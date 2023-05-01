import { BaseCrudDao } from '../base-crud-dao';
import { Connection, Model } from 'mongoose';
import { plainSchema } from '../../schema/plains';

export class PlainDao extends BaseCrudDao {
  protected readonly model: Model<any>;
  constructor(mongo: Connection, collection: string) {
    super(mongo.model(collection, plainSchema));
  }
}
