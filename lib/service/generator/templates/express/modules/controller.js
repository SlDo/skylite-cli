<%_ if (lang == 1) { _%>
import { Router } from 'express';

export function createController(router: Router): void {
  router.get('/<%- name %>');
}
<%_ } else { _%>
  module.exports = {
    createController(router) {
      router.get('/<%- name %>');
    }
  }
  <%_ } _%>
