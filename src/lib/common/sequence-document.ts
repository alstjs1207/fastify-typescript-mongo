import { Document } from 'mongoose';
export interface SequenceDocument extends Document {
  seq: number;
}
