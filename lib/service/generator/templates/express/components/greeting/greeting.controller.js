<%_ if (lang == 1) { _%>
import { Router } from 'express';
import { greeting } from './greeting.dal';

export function createController(router: Router): void {
  router.get('/hello', greeting);
}
<%_ } else { _%>
const { greeting } = require('./greeting.dal');

module.exports = {
  createController(router) {
    router.get('/hello', greeting);
  }
}
<%_ } _%>
