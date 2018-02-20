(function () {
    angular.module('ScaleCrud', []);
})();
(function () {
    'use strict';

    angular.module('ScaleCrud')
        .controller('ScaleCrudController', ScaleCrudController);

    ScaleCrudController.$inject = ['$scope'];

    function ScaleCrudController($scope) {
        var vm = this;
        // place holder
        vm.btnWeight = _btnWeight;

        function _btnWeight() {
            //Working
            console.log("doing something");
        }
    }
})();