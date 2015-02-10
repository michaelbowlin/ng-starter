(function() {
    'use strict';

    angular
        .module('app.customers1')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'customer1',
                config: {
                    absract: true,
                    template: '<ui-view class="shuffle-animation"/>',
                    url: '/customer1'
                }
            },
            {
                state: 'customer1.list',
                config: {
                    url: '/list',
                    templateUrl: 'app/customers1/customers1.html',
                    controller: 'Customers1',
                    controllerAs: 'vm',
                    title: 'Customers1',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-group"></i> Customers1'
                    }
                }
            }
        ];
    }
})();
