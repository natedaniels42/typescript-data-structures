"use strict";
exports.__esModule = true;
var Edge_1 = require("../Edge/Edge");
var Vertex = /** @class */ (function () {
    function Vertex(data) {
        this.data = data;
        this.edges = [];
    }
    Vertex.prototype.addEdge = function (vertex, weight) {
        if (weight === void 0) { weight = null; }
        this.edges.push(new Edge_1["default"](this, vertex, weight));
    };
    Vertex.prototype.removeEdge = function (vertex) {
        this.edges = this.edges.filter(function (edge) { return edge.end !== vertex; });
    };
    Vertex.prototype.print = function () {
        var edgeList = this.edges.map(function (edge) { return edge.weight ? edge.end.data + " (" + edge.weight + ")" : "" + edge.end.data; });
        console.log(this.data + " --> " + edgeList.join(', '));
    };
    return Vertex;
}());
exports["default"] = Vertex;
