/**
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/*global require, process*/

const PORT = process.env.JS_DASHBOARD_PORT || 3000;

var express = require('express'),
    moment = require('momentjs'),
    logger = require('pino')(),
    cookieParser = require('cookie-parser'),
    authenticationFilter = require('./middlewares/authentication-filter'),
    app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.static('files'));
app.use(cookieParser());


app.use(authenticationFilter);

app.get('/', function(request, response) {
    response.render('index', { title: 'Hey', youAreUsingJade: true});
});

app.listen(PORT, function () {
    logger.info("Sample application started on port %s", PORT);
});