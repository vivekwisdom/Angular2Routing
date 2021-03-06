var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var common_dom_1 = require('angular2/platform/common_dom');
var app_1 = require('./app/app');
function main() {
    return browser_1.bootstrap(app_1.App, [
        http_1.HTTP_PROVIDERS,
        router_1.ROUTER_PROVIDERS,
        common_dom_1.ELEMENT_PROBE_PROVIDERS
    ])
        .catch(function (err) { return console.error(err); });
}
document.addEventListener('DOMContentLoaded', main);
//# sourceMappingURL=bootstrap.js.map