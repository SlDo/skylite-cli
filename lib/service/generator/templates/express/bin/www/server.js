<%_ if (lang == 1) { _%>
import { app } from '../../app';
import http from 'http';
<%_ } else { _%>
const { app } = require('../../app');
const http = require('http');
<%_ } _%>
app.set('port', process.env.PORT || '3000');

<% if (lang == 1) { %>export <% } %>const server = http.createServer(app).listen(app.get('port'));

<%_ if (lang == 0) { _%>
module.exports = server;
<%_ } _%>
