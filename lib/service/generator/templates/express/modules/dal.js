<%_ if (lang == 1) { _%>
import { Request, Response } from 'express';

export function dal(req: Request, res: Response): Response {
  return res.send('<%- name %>!').end(200);
}
<%_ } else { _%>
module.exports.dal = function dal(req, res) {
  return res.send('<%- name %>!').end(200);
}
<%_ } _%>
