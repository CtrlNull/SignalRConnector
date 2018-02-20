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
        vm.btnConnect = _btnConnect;

        function _btnWeight() {
            //Working
            console.log("doing something");
        }
        function _btnConnect() {
            try {
                var chat = $.connection.hello;

                chat.client.helloClient = function (str) {
                    alert(str);
                }

                $.connection.hub.start().done(function () {
                    chat.server.helloSignalR();
                });
            }
            catch
            {
                console.log("ERROR Connecting to hub");
            }


        }
    }
})();