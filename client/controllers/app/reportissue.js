angular.module('app').controller('app_reportissue', app_reportissue);
function app_reportissue($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.reportissuefnc = function() {
        app.action('reportissue', 'submit', this)
    }
}