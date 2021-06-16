"use strict";
exports.__esModule = true;
var Vertex_1 = require("./Vertex/Vertex");
var Graph = /** @class */ (function () {
    function Graph(isWeighted, isDirected) {
        if (isWeighted === void 0) { isWeighted = false; }
        if (isDirected === void 0) { isDirected = false; }
        this.vertices = [];
        this.isWeighted = isWeighted;
        this.isDirected = isDirected;
    }
    Graph.prototype.addVertex = function (data) {
        var newVertex = new Vertex_1["default"](data);
        this.vertices.push(newVertex);
        return newVertex;
    };
    Graph.prototype.removeVertex = function (vertex) {
        vertex.edges.forEach(function (edge) { return edge.end.removeEdge(vertex); });
        this.vertices = this.vertices.filter(function (v) { return v !== vertex; });
    };
    Graph.prototype.addEdge = function (vertex1, vertex2, weight) {
        if (weight === void 0) { weight = null; }
        var edgeWeight = this.isWeighted ? weight : null;
        vertex1.addEdge(vertex2, edgeWeight);
        if (!this.isDirected) {
            vertex2.addEdge(vertex1, edgeWeight);
        }
    };
    Graph.prototype.removeEdge = function (vertex1, vertex2) {
        vertex1.removeEdge(vertex2);
        if (!this.isDirected) {
            vertex2.removeEdge(vertex1);
        }
    };
    Graph.prototype.print = function () {
        this.vertices.forEach(function (vertex) { return vertex.print(); });
    };
    return Graph;
}());
var g = new Graph(true);
var one = g.addVertex(1);
var two = g.addVertex(2);
var three = g.addVertex(3);
var four = g.addVertex(4);
var five = g.addVertex(5);
var six = g.addVertex(6);
var seven = g.addVertex(7);
var eight = g.addVertex(8);
var nine = g.addVertex(9);
g.addEdge(one, two, 100);
g.addEdge(one, four, 350);
g.addEdge(two, three, 180);
g.addEdge(two, seven, 450);
g.addEdge(three, four, 56);
g.addEdge(three, five, 280);
g.addEdge(five, eight, 112);
g.addEdge(four, six, 321);
g.addEdge(seven, nine, 85);
g.addEdge(six, eight, 22);
g.print();
