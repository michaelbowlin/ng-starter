(function () {
    'use strict';

    angular
        .module('app.formvalidations')
        .controller('formvalidations', formvalidations);

    /* @ngInject */
    function formvalidations($state, dataservice, logger) {
        var vm = this;
        vm.validateCtrl = validateCtrl;
        vm.title = 'Form Validations';

        activate();

        function activate() {

        }

        function validateCtrl(){
                vm.user = 'John Doe';
                vm.email = 'john.doe@gmail.com';
                vm.user2 = 'John Doe';
        }

    }
})();
