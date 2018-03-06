const angular = require('angular');
require('angular-route');

angular.module("finalAssessment", ["ngRoute"]);



// DANGER DANGER loading CSS in alphabetical order!
var req = require.context('./', true, /\.(css)$/);
req.keys().forEach(req);

// Load all js files -- BAD for pruning, but good for not forgetting to import.
var req = require.context('./', true, /\.(js)$/);
req.keys().forEach(req);