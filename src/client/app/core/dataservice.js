(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($http, $location, $q, exception, logger) {
        /* jshint validthis:true */
        var readyPromise;

        var service = {
            getCustomers: getCustomers,
            getCustomer: getCustomer,
            getformvalidation: getformvalidation,
            getformvalidations: getformvalidations,
            gethighcharts: gethighcharts,
            ready: ready
        };

        return service;

        /*
        *   
        *   
        *   CUSTOMERS
        *   
        *   
        */
        function getCustomer(id) {
            return $http.get('/api/customer/' + id)
                .then(getCustomerComplete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getCustomer')(message);
                    $location.url('/');
                });

            function getCustomerComplete(data, status, headers, config) {
                return data.data;
            }
        }

        function getCustomers() {
            return $http.get('/api/customers')
                .then(getCustomersComplete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getCustomers')(message);
                    $location.url('/');
                });

            function getCustomersComplete(data, status, headers, config) {
                return data.data;
            }
        }


        /*
        *   
        *   
        *   HighCharts
        *   
        *   
        */
        function gethighcharts(id) {
            return $http.get('/api/highcharts/' + id)
                .then(gethighchartsComplete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getformvalidation')(message);
                    $location.url('/');
                });

            function gethighchartsComplete(data, status, headers, config) {
                return data.data;
            }
        }


        /*
        *   
        *   
        *   FORM VALIDATION
        *   
        *   
        */
        function getformvalidation(id) {
            return $http.get('/api/formvalidation/' + id)
                .then(getformvalidationComplete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getformvalidation')(message);
                    $location.url('/');
                });

            function getformvalidationComplete(data, status, headers, config) {
                return data.data;
            }
        }

        function getformvalidations() {
            return $http.get('/api/formvalidations')
                .then(getformvalidationsComplete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getformvalidations')(message);
                    $location.url('/');
                });

            function getformvalidationsComplete(data, status, headers, config) {
                return data.data;
            }
        }

        function getReady() {
            if (!readyPromise) {
                // Apps often pre-fetch session data ("prime the app")
                // before showing the first view.
                // This app doesn't need priming but we add a
                // no-op implementation to show how it would work.
                logger.info('Primed the app data');
                readyPromise = $q.when(service);
            }
            return readyPromise;
        }

        function ready(promisesArray) {
            return getReady()
                .then(function() {
                    return promisesArray ? $q.all(promisesArray) : readyPromise;
                })
                .catch(exception.catcher('"ready" function failed'));
        }
    }
})();
