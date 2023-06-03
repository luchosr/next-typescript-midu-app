import { rest } from 'msw';

export const prereqHandlers = [
  rest.post('/api/prereqtollgate', (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get('/api/prereqtollgate', (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
