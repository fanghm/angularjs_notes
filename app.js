/**
 * Created by Frank on 2017/7/4.
 */
(function () {
    var app = angular.module('gem_store', []);
    app.controller('StoreController', function () {
        // alert('Hello AngularJS!');
        this.product = gem;
    });

    var gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Priceless gem!'
    }
})();