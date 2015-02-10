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
            getCustomer: getCustomer,
            getCustomers: getCustomers,
            getCustomer1: getCustomer1,
            getCustomers1: getCustomers1,
            ready: ready
        };

        return service;

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

        function getCustomer1(id) {
            return $http.get('/api/customer1/' + id)
                .then(getCustomer1Complete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getCustomer1')(message);
                    $location.url('/');
                });

            function getCustomer1Complete(data, status, headers, config) {
                return data.data;
            }
        }

        function getCustomers1() {
            return $http.get('/api/customers1')
                .then(getCustomers1Complete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getCustomers1')(message);
                    $location.url('/');
                });

            function getCustomers1Complete(data, status, headers, config) {
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