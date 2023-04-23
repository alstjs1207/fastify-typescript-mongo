export interface Params {
  id: number;
  offset: number;
  limit: number;
  order: 'ASC' | 'DESC' | undefined;
}

export interface Querystring {
  id: number;
  state: string;
  type: string;
  name: string;
  field: string;
  value: string;
  offset: number;
  limit: number;
  order: string;
}

export interface Body<T = JSON> {
  type: string;
  state: string;
  flags: number;
  code: string;
  name: string;
  description: string;
  extras: T;
}
