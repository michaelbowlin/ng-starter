(function () {
    'use strict';

    angular
        .module('app.customers1')
        .controller('Customers1', Customers1);

    /* @ngInject */
    function Customers1($state, dataservice, logger) {
        var vm = this;
        vm.customers1 = [];
        vm.gotoCustomer1 = gotoCustomer1;
        vm.title = 'Customers1';

        activate();

        function activate() {
            return getCustomers1().then(function () {
                logger.info('Activated Customers1 View');
            });
        }

        function getCustomers1() {
            return dataservice.getCustomers1().then(function (data) {
                vm.customers1 = data;
                return vm.customers1;
            });
        }

        function gotoCustomer1(c) {
            $state.go('customer1.detail', {
                id: c.id
            });
        }
    }
})();
