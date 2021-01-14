<%_ if (lang == 1) { _%>
import { Request, Response } from 'express';

export function greeting(req: Request, res: Response): Response {
  return res.send('Hello!').end(200);
}
<%_ } else { _%>
module.exports.greeting = function greeting(req, res) {
  return res.send('Hello!').end(200);
}
<%_ } _%>
