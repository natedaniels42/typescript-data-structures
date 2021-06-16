"use strict";
exports.__esModule = true;
var Edge = /** @class */ (function () {
    function Edge(start, end, weight) {
        if (weight === void 0) { weight = 0; }
        this.start = start;
        this.end = end;
        this.weight = weight;
    }
    return Edge;
}());
exports["default"] = Edge;
