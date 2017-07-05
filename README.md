# AngularJS study notes

## Module & Controller
```javascript
    var app = angular.module('test', []);
    app.controller('TestController', function () {
        // ...
    });
```

## Directives
* ng-app
* ng-controller

* ng-show
* ng-hide

* ng-repeat
* ng-src    # `<image src="{{prod.images[0].full}}"/>` doesn't work as browser tries to load the image before the expression evaluates

* ng-init
* ng-click  # `<a ng-click='tab = 1'>`
* ng-class  # `ng-class="{ <class_name>:<expression> }"`
## Filters
* currency
* date
* limitTo   # for string length or array element number
* uppercase/lowercase
* orderBy   # sort: orderBy: '-price'
