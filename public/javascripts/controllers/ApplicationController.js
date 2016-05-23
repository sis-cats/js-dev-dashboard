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
/*global angular*/
(function () {
    'use strict';
    angular.module('dashboard.controllers')
        .controller('applicationController', ['$scope', '$timeout', '$mdSidenav', '$mdMedia', '$log', function ($scope, $timeout, $mdSidenav, $mdMedia, $log) {
            $scope.toggleLeft = buildDelayedToggler('left');
            $scope.toggleRight = buildToggler('right');
            $scope.isOpenRight = function () {
                return $mdSidenav('right').isOpen();
            };

            /**
             * Supplies a function that will continue to operate until the
             * time is up.
             *
             * @param func
             * @param wait
             * @param context
             * @returns {debounced}
             */
            function debounce(func, wait, context) {
                var timer;
                return function debounced() {
                    var context = $scope,
                        args = Array.prototype.slice.call(arguments);
                    $timeout.cancel(timer);
                    timer = $timeout(function () {
                        timer = undefined;
                        func.apply(context, args);
                    }, wait || 10);
                };
            }

            /**
             * Build handler to open/close a SideNav; when animation finishes
             * report completion in console
             *
             * @param navID
             * @returns {debounced}
             */
            function buildDelayedToggler(navID) {
                return debounce(function () {
                    $mdSidenav(navID)
                        .toggle()
                        .then(function () {
                            $log.debug("toggle " + navID + " is done");
                        });
                }, 200);
            }

            /**
             * 
             * @param navID
             * @returns {Function}
             */
            function buildToggler(navID) {
                return function () {
                    $mdSidenav(navID)
                        .toggle()
                        .then(function () {
                            $log.debug("toggle " + navID + " is done");
                        });
                }
            }
        }])
        .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
            $scope.close = function () {
                $mdSidenav('left').close()
                    .then(function () {
                        $log.debug("close LEFT is done");
                    });
            };
        })
        .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
            $scope.close = function () {
                $mdSidenav('right').close()
                    .then(function () {
                        $log.debug("close RIGHT is done");
                    });
            };
        });
})();