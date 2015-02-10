(function () {
    'use strict';

    angular
        .module('app.formvalidations')
        .controller('formvalidations', formvalidations);

    /* @ngInject */
    function formvalidations($state, dataservice, logger) {
        var vm = this;
        vm.formvalidations = [];
        vm.gotoformvalidation = gotoformvalidation;
        vm.title = 'formvalidations';

        activate();

        function activate() {
            return getformvalidations().then(function () {
                logger.info('Activated formvalidations View');
            });
        }

        function getformvalidations() {
            return dataservice.getformvalidations().then(function (data) {
                vm.formvalidations = data;
                return vm.formvalidations;
            });
        }

        function gotoformvalidation(c) {
            $state.go('formvalidation.detail', {
                id: c.id
            });
        }
    }
})();
