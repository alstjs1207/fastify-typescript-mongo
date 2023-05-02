import { Model } from 'mongoose';
import { Body } from '@lib/common/mapper.interface';
import { SequenceDocument } from '@lib/common/sequence-document';

export class BaseCrudDao {
  constructor(protected key: string, protected model: Model<any>, protected sequenceModel: Model<SequenceDocument>) {}

  async getNextSequence(key: string): Promise<number> {
    const data = await this.sequenceModel.findOneAndUpdate({ _id: key }, { $inc: { seq: 1 } }, { upsert: true });
    if (!data) {
      throw new Error('sequence error');
    }
    return data.seq;
  }

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
    data.id = await this.getNextSequence(this.key);
    return this.model.create(data);
  }

  async update(id: number, data: Body) {
    await this.model.updateOne({ id }, data, { upsert: true });
    return this.model.findOne({ id });
  }

  async delete(id: number) {
    await this.model.deleteOne({ id });
    return id;
  }
}
