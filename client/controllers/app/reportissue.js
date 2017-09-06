angular.module('app').controller('app_reportissue', app_reportissue);
function app_reportissue($scope, app) {
    'use strict';
    app.init($scope, function () {
        $scope.data.category.options = JSON.parse($scope.data.category.options)
    });
    
    $scope.reportissuefnc = function() {
        app.action('reportissue', 'submit', this)
    }
}