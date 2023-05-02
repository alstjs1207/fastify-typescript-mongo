import { PlainDao } from '@dao/plain/plain-dao';
import { BaseCrudService } from '../base-crud-service';

export class PlainService extends BaseCrudService {
  constructor(protected plainDao: PlainDao) {
    super(plainDao);
  }
}
