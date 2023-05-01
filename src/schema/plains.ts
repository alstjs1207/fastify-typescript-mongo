import { Schema } from 'mongoose';

export const plainSchema = new Schema(
  {
    id: { type: Number, default: 0, index: true },
    site: { type: String, default: 'site', required: true, description: '사이트' },
    type: { type: String, default: null, required: false, description: '유형' },
    state: { type: String, default: 'NORMAL', required: true, description: '상태' },
    name: { type: String, default: null, required: false, description: '이름' },
  },
  { timestamps: true }
);
