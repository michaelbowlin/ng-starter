(function() {
    'use strict';

    angular
        .module('app.highcharts')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'highcharts',
                config: {
                    absract: true,
                    template: '<ui-view class="shuffle-animation"/>',
                    url: '/highcharts'
                }
            },
            {
                state: 'highcharts.list',
                config: {
                    url: '/list',
                    templateUrl: 'app/highcharts/highcharts.html',
                    controller: 'highcharts',
                    controllerAs: 'vm',
                    title: 'highcharts',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-group"></i> High Charts'
                    }
                }
            }
        ];
    }
})();
