(function() {
  'use strict';
  angular
    .module('app', ['ncModule']) // INJECT MODULE
    .config(ncConfig)
    .controller('Controller', Controller);
  function ncConfig(ncConfigServiceProvider) {
    ncConfigServiceProvider.setApiRootURI('/mycms/'); // SETTING API ROOT URI
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
  function Controller($scope, $window, ncAuthService, ncEditableService) {
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
    // CHANGE '_id' TO MATCH A CREATED EDITABLE
    $scope.example1 = ncEditableService
      .get({_id: '558605493d0a87ddf115cddd'});
    // CHANGE '_id' TO MATCH A CREATED EDITABLE
    $scope.example2 = ncEditableService
      .get({_id: '55876f7d79737813fdb89ae4'});
    // CHANGE '_id' TO MATCH A CREATED EDITABLE
    $scope.example3 = ncEditableService
      .get({_id: '5587f233c81a2982000436bb'});
    // CHANGE '_id' TO MATCH A CREATED EDITABLE
    $scope.example4 = ncEditableService
      .get({_id: '5587f24ac81a2982000436bc'});
    $scope.save = function() {
      $scope.example1.$update();
      $scope.example2.$update();
      $scope.example3.$update();
      $scope.example4.$update();
    };
  }
})();
