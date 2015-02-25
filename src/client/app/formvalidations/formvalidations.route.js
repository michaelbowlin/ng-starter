(function() {
    'use strict';

    angular
        .module('app.formvalidations')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'formvalidation',
                config: {
                    absract: true,
                    template: '<ui-view class="shuffle-animation"/>',
                    url: '/formvalidation'
                }
            },
            {
                state: 'formvalidation.list',
                config: {
                    url: '/list',
                    templateUrl: 'app/formvalidations/formvalidations.html',
                    controller: 'formvalidations',
                    controllerAs: 'vm',
                    title: 'formvalidations',
                    settings: {
                        nav: 2,
                        content: '<i class="secondary-nav fa fa-check-circle"></i><span>Validations</span>'
                    }
                }
            }
        ];
    }
})();
