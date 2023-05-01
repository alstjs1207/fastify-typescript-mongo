import { Model } from 'mongoose';
import { Body } from '@lib/common/mapper.interface';

export class BaseCrudDao {
  constructor(protected model: Model<any>) {}

  async findAll() {
    const dataArray = await this.model.find({});
    return dataArray;
  }

  async selectById(id: number) {
    const data = await this.model.findOne({ id });
    if (!data) {
      throw new Error(`${id} is not exist`);
    }
    return data;
  }

  async create(data: Body) {
    return this.model.create(data);
  }

  async update(id: number, data: Body) {
    await this.model.updateOne({ id }, data);
    return this.model.findOne({ id });
  }

  async delete(id: number) {
    await this.model.deleteOne({ id });
    return id;
  }
}
