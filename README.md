# AngularJS study notes

## Module & Controller
```javascript
    var app = angular.module('test', []);
    app.controller('TestController', function () {
        // ...
    });
```

## Directives
### Built-in Directives
* ng-app
* ng-controller

* ng-show
* ng-hide

* ng-repeat # `<li ng-repeat="review in product.reviews">`
* ng-src    # `<image src="{{prod.images[0].full}}"/>` doesn't work as browser tries to load the image before the expression evaluates
* ng-include    # `ng-include="'header.html'"`
* ng-options    # `<select ng-options="stars for stars in [5,4,3,2,1]"></select>`

* ng-init       # better do it inside a controller
* ng-click      # `<a ng-click='tab = 1'>`
* ng-class      # `ng-class="{ <class_name>:<expression> }"`
* ng-submit     # `<form ng-submit="reviewCtrl.addReview(product)">`

### Custom Directives
Use Element Directives for UI widgets and Attribute Directives for mixin behaviors...

```javascript
app.directive('productTitle', function(){
    return {
        restrict: 'E',
        templateUrl: 'product-title.html',  # template
        controller: function() {...},
        controllerAs: '<alias>',
    };
});
```

## Filters
* currency
* date
* limitTo   # for string length or array element number
* uppercase/lowercase
* orderBy   # sort: orderBy: '-price'

## Form Validation
$valid
input control class: ng-pristine -> ng-dirty -> ng-valid

## AngularJS debugging
### Debugging from console
angular.reloadWithDebugInfo();

$($0)   // for jQuery, same as angular.element($0)
$($0).scope()   # properties inherited from parents won't show
$($0).scope().anyPropertyOfParent
$($0).scope().$parent
$($0).scope().$parent.$parent
$($0).scope().$root # root scope
$($0).isolateScope()

$($0).scope().hasOwnProperty('foo') # see if the property is set directly on the scope
$($0).attr('ng-controller') # find current controller
$($0).closest('[ng-controller]').attr('ng-controller')  # find nearest controller

### Debugging code

```javascript
app.config(function($logProvider){
    $logProvider.debugEnabled(true);
});
```
