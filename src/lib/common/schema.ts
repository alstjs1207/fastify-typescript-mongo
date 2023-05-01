export const GET = (entityName: string) => {
  return {
    schema: {
      description: `${entityName} 을/를 여러개 조회한다.`,
      tags: [`${entityName}`],
      summary: `get ${entityName} array`,
      security: [{ apiKey: [] }],
      params: {},
      querystring: {
        type: 'object',
        properties: {
          limit: { type: 'number', default: 20 },
          offset: { type: 'number', default: 0 },
          order: { type: 'string', description: 'ASC | DESC', default: 'DESC' },
        },
      },
      response: {
        201: {
          description: 'Successful response',
          type: 'array',
          items: {
            type: 'object',
            properties: {
              _id: { type: 'string' },
              id: { type: 'number' },
              site: { type: 'string' },
              type: { type: 'string' },
              state: { type: 'string' },
              name: { type: 'string' },
            },
          },
        },
      },
    },
  };
};

export const GET_ID = (entityName: string) => {
  return {
    schema: {
      description: `${entityName} 을/를 ID 로 하나만 조회한다. `,
      tags: [`${entityName}`],
      summary: `get ${entityName} object`,
      security: [{ apiKey: [] }],
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: `${entityName} id`,
          },
        },
      },
      response: {
        201: {
          description: 'Successful response',
          type: 'object',
          properties: {
            _id: { type: 'string' },
            id: { type: 'number' },
            site: { type: 'string' },
            type: { type: 'string' },
            state: { type: 'string' },
            name: { type: 'string' },
          },
        },
      },
    },
  };
};

export const POST = (entityName: string) => {
  return {
    schema: {
      description: `${entityName} 을/를 생성한다.`,
      tags: [`${entityName}`],
      summary: `post ${entityName} object`,
      security: [{ apiKey: [] }],
      params: {},
      body: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          site: { type: 'string' },
          type: { type: 'string' },
          state: { type: 'string' },
          name: { type: 'string' },
        },
      },
      response: {
        201: {
          description: 'Successful response',
          type: 'object',
          properties: {
            _id: { type: 'string' },
            id: { type: 'number' },
            site: { type: 'string' },
            type: { type: 'string' },
            state: { type: 'string' },
            name: { type: 'string' },
          },
        },
      },
    },
  };
};

export const PUT = (entityName: string) => {
  return {
    schema: {
      description: `${entityName} 을/를 수정한다. `,
      tags: [`${entityName}`],
      summary: `put ${entityName} object`,
      security: [{ apiKey: [] }],
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: `${entityName} id`,
          },
        },
      },
      body: {
        type: 'object',
        properties: {
          site: { type: 'string' },
          type: { type: 'string' },
          state: { type: 'string' },
          name: { type: 'string' },
        },
      },
      response: {
        201: {
          description: 'Successful response',
          type: 'object',
          properties: {
            _id: { type: 'string' },
            id: { type: 'number' },
            site: { type: 'string' },
            type: { type: 'string' },
            state: { type: 'string' },
            name: { type: 'string' },
          },
        },
      },
    },
  };
};

export const DELETE = (entityName: string) => {
  return {
    schema: {
      description: `${entityName} 을/를 삭제한다. `,
      tags: [`${entityName}`],
      summary: `delete ${entityName} object`,
      security: [{ apiKey: [] }],
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: `${entityName} id`,
          },
        },
      },
      response: {
        201: {
          description: 'Successful response',
          type: 'object',
          properties: {
            msg: { type: 'string' },
          },
        },
      },
    },
  };
};

export const DEFAULT_SCHEMA = (entityName: string) => {
  return {
    GET: GET(entityName),
    GET_ID: GET_ID(entityName),
    POST: POST(entityName),
    PUT: PUT(entityName),
    DELETE: DELETE(entityName),
  };
};
