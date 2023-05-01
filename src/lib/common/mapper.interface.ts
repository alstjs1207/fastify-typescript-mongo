export interface Params {
  id: number;
  offset: number;
  limit: number;
  order: 'ASC' | 'DESC' | undefined;
}

export interface Querystring {
  id: number;
  site: string;
  state: string;
  type: string;
  name: string;
  offset: number;
  limit: number;
  order: string;
}

export interface Body {
  id: number;
  site: string;
  type: string;
  state: string;
  name: string;
}
