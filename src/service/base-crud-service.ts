import { Body } from '@lib/common/mapper.interface';

export class BaseCrudService {
  constructor(protected dao: any) {}

  async find() {
    return this.dao.findAll();
  }

  async getById(id: number) {
    return this.dao.selectById(id);
  }

  async save(command: Body) {
    return this.dao.create(command);
  }

  async modify(id: number, data: Body) {
    return this.dao.update(id, data);
  }

  async remove(id: number) {
    return this.dao.delete(id);
  }
}
