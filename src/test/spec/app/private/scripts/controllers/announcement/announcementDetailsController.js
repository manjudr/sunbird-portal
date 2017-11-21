/**
 * name: announcementDetailsController.js
 * author: Sourav Dey
 * Date: 21-11-2017
 */

'use strict'

describe('Controller: announcementDetailsController', function () {
  // load the controller's module
  beforeEach(module('playerApp'))

  var announcementService,
    scope,
    rootScope,
    announcementDetailsController,
    $q,
    deferred,
    timeout,
    annInboxTestData = announcementTestData.getAnnouncementInbox

  beforeEach(inject(function ($rootScope, $controller) {
    $controller('AppCtrl', {
      $rootScope: $rootScope,
      $scope: $rootScope.$new()
    })
  }))

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope, $controller, _announcementService_, _$q_, _$timeout_) {
    rootScope = $rootScope
    scope = $rootScope.$new()
    announcementService = _announcementService_
    $q = _$q_
    timeout = _$timeout_
    deferred = _$q_.defer()

    announcementDetailsController = $controller('announcementDetailsController', {
      $rootScope: rootScope,
      $scope: scope,
      announcementService: announcementService
    })
  }))

  describe('Get announcement by id', function () {

  })
})