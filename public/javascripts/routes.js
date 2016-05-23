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
/* global angular */
var app = angular.module('dashboard.routes');

app.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider.state('home', {
        url: "/home",
        templateUrl: "/javascripts/templates/app.html",
        controller: 'applicationController'
    }).state('login', {
        url: "/login",
        templateUrl: "/javascripts/templates/login.html",
        controller: 'homeController'
    }).state('splash', {
        url: "/splash",
        templateUrl: "/javascripts/templates/splash.html",
        controller: 'splashController'
    });

    $urlRouterProvider.otherwise('/splash')

});

app.run();