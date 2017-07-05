/**
 * Created by Frank on 2017/7/4.
 */
(function () {
    var app = angular.module('gem_store', []);
    app.controller('StoreController', function () {
        // alert('Hello AngularJS!');
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Priceless gem!',
            canPurchase: true,
            soldOut: true
        },
        {
            name: 'Super gem',
            price: 29.99,
            description: 'Gorgeous gem!',
            canPurchase: false,
            soldOut: false
        },
    ];
})();