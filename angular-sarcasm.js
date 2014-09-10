angular.module('angular-sarcasm', [])
    .directive('sarcasm', [

        function () {
            var dir = {
                restrict: 'EA',
                link: function (scope, el, attrs) {
                    var sartalics = {
                        '-webkit-transform': 'skew(25deg)',
                        '-moz-transform': 'skew(25deg)',
                        '-ms-transform': 'skew(25deg)',
                        '-o-transform': 'skew(25deg)',
                        'transform': 'skew(25deg)',
                        'display': 'inline-block'

                    };
                    el.css(sartalics);
                }
            };
            return dir;
        }
    ]);