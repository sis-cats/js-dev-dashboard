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
/* global __dirname, module*/
module.exports = function (config) {

    var SRC = [
        'src/myApp/**/*.js',
        'test/myApp/**/*.spec.js'
    ];

    var LIBS = [
        'node_modules/angular/angular.js',
        'node_modules/angular-animate/angular-animate.js',
        'node_modules/angular-aria/angular-aria.js',
        'node_modules/angular-material/angular-material.js',

        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/angular-material/angular-material-mocks.js'
    ];

    config.set({

        basePath: __dirname + '/..',
        frameworks: ['jasmine'],

        files: LIBS.concat(SRC),

        port: 9876,
        reporters: ['progress'],
        colors: true,

        autoWatch: false,
        singleRun: true,
        browsers: ['PhantomJS,Chrome']

    });

};
