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
        vm.btnSend = _btnSend;
        connect();

        //=========== V Buttons V ==============//
        // Weight Button
        function _btnWeight() {
            //Working
            console.log("doing something");
        }
        // Send Message btn
        function _btnSend() {
            console.log($scope.c.inputMessage);
        }
        function _btnConnect() {
            //
        }
        //============ V SignalR V =============//

        function connect() {
            try {
                var chat = $.connection.hello;

                chat.clientrecieveMessage = function (username, message) {

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