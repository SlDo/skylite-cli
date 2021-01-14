<%_ if (lang == 1) { _%>
import express, { Router } from 'express';

export const app: express.Application = express();
export const router: Router = express.Router();

import('./components/greeting/greeting.controller').createController(router);
<%_ } else { _%>
const express = require('express');

const app = express();
const router = express.Router();

require('./components/greeting/greeting.controller').createController(router);
<%_ } _%>

app.use('/api', router);

<%_ if (lang == 0) { _%>
module.exports = { router, app };
<%_ } _%>
