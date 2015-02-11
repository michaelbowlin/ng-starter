(function () {
    'use strict';

    angular
        .module('app.formvalidations')
        .controller('formvalidations', formvalidations);

    /* @ngInject */
    function formvalidations($state, dataservice, logger, $scope) {
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
    
        $scope.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
          ];

          $scope.addAlert = function() {
            $scope.alerts.push({msg: 'Another alert!'});
          };

          $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
          };




    }
})();
