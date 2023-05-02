import { Schema } from 'mongoose';

export const sequenceSchema = new Schema({
  _id: { type: String },
  seq: { type: Number, default: 0, required: true, description: 'auto increment' },
});
