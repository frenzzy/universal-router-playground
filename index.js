"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var universal_router_1 = require("universal-router");
var routes = [
    { path: '', action: function () { return 'Home'; } },
    { path: '/foo', action: function () { return 'Foo'; } },
    { path: '/bar', action: function () { return 'Bar'; } },
    { path: '/baz', action: function () { return 'Baz'; } },
];
console.log(universal_router_1.default);
var router = new universal_router_1.default(routes);
router.resolve('/foo').then(function (result) { return console.log(result); });
