'use strict';

/**
 * @ngdoc function
 * @name playerApp.controller:UseruserContentCtrl
 * @description
 * # UseruserContentCtrl
 * Controller of the playerApp
 */
angular.module('playerApp')
    .controller('userContentCtrl', ['$scope', 'contentService', '$rootScope', '$timeout', function($scope, contentService, $rootScope, $timeout) {
        $scope.contentItem = undefined;
        $scope.hideUserContent = false;

        $scope.getPublishedContent = function() {
            var req = {
                'filters': {
                    'createdBy': '12345678',
                    'status': ['live'],
                    'contentType': ['application/pdf', 'video/youtube', 'video/mp4', 'application/vnd.ekstep.ecml-archive', 'application/vnd.ekstep.html-archive']
                },
                'params': {
                    'cid': '12'
                }
            };
            contentService.search(req).then(function(res) {
                    $scope.content = undefined;
                    if (res.responseCode === 'OK' && res.result.count > 0) {
                        $scope.publishedContent = res.result.content;
                    }
                }),
                function(errorMessage) {
                    $log.warn(errorMessage);
                };
        };
        $scope.getPublishedContent();
        $scope.getDraftContent = function() {
            var req = {
                'filters': {
                    'createdBy': '12345678',
                    'status': ['draft']
                },
                'params': {
                    'cid': '12'
                }
            };
            contentService.search(req).then(function(res) {
                    $scope.content = undefined;
                    if (res.responseCode === 'OK' && res.result.count > 0) {
                        $scope.draftContent = res.result.content;
                    }
                }),
                function(errorMessage) {
                    $log.warn(errorMessage);
                };
        };
        $scope.getDraftContent();
        $scope.loadRating = function() {
            $timeout(function() {
                $('.ui.rating')
                    .rating({
                        maxRating: 5
                    }).rating('disable', true);
            }, 1000)
        };

        $scope.editContent = function(content) {
            $scope.hideUserContent = true;
            $rootScope.$emit('editContentEnable', content);
        };

        $rootScope.$on('editContentDisable', function(e, c) {
            $scope.hideUserContent = false;
            $scope.getDraftContent();
            $scope.getPublishedContent();
        });
    }]);