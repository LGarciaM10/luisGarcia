angular.module('app').controller('app_reportissue', app_reportissue);
function app_reportissue($scope, app) {
    'use strict';
    app.init = function($scope) {
        this.data.category = $scope.data.category; 
    };
    
    $scope.reportissuefnc = function() {
        app.action('reportissue', 'submit', this)
    }
}