(function() {
  'use strict';
  angular
    .module('app', ['ncModule']) // INJECT MODULE
    .config(ncConfig)
    .controller('Controller', Controller);
  function ncConfig(ncConfigServiceProvider) {
    ncConfigServiceProvider.setApiRootURI('/cms/'); // SETTING API ROOT URI
    // NOTICE TRAILING SLASH IN ABOVE
    // SETTING CSS FOR PENCIL MARKER
    ncConfigServiceProvider.setPencilCss(
      [
        'left: -24px;',
        'top: 0px;',
        'width: 24px;',
        'height: 24px;',
        'background-color: rgba(250,202,11,0.5);'
      ].join('\n')
    );
    // SETTING HTML FOR PENCIL MARKER
    ncConfigServiceProvider.setPencilHTML('<img src="img/edit.png" />');
  }
  function Controller($scope, $window, ncAuthService, ncEditableService, ncCachedEditableService) {
    // CHANGE TO MATCH A CREATED EDITABLE
    var example1Id  = '564b5981507846400c1c2235';
    var example2Id  = '564b59c5507846400c1c2236';
    var example3Id  = '564b59ec507846400c1c2237';
    var example4Id  = '564b5a11507846400c1c2238';
    $scope.username = '';
    $scope.password = '';
    $scope.isAuth = ncAuthService.authSync(); // DETERMINING IF AUTHENTICATED
    // AFTER LOGIN OR LOGOUT NEED TO CHANGE SCREEN (OR RELOAD)
    $scope.login = function() {
      ncAuthService.login($scope.username, $scope.password).then(function() {
        $window.location.reload();
      });
    };
    $scope.logout = function() {
      ncAuthService.logout();
      $window.location.reload();
    };
    if ($scope.isAuth) {
      $scope.example1 = ncEditableService.get({_id: example1Id});
      $scope.example2 = ncEditableService.get({_id: example2Id});
      $scope.example3 = ncEditableService.get({_id: example3Id});
      $scope.example4 = ncEditableService.get({_id: example4Id});
    } else {
      $scope.example1 = ncCachedEditableService.get({_id: example1Id});
      $scope.example2 = ncCachedEditableService.get({_id: example2Id});
      $scope.example3 = ncCachedEditableService.get({_id: example3Id});
      $scope.example4 = ncCachedEditableService.get({_id: example4Id});
    } 
    $scope.save = function() {
      $scope.example1.$update();
      $scope.example2.$update();
      $scope.example3.$update();
      $scope.example4.$update();
    };
  }
})();
