"use strict";
exports.__esModule = true;
var LinkedList_1 = require("../LinkedList/LinkedList");
;
var HashMap = /** @class */ (function () {
    function HashMap(size) {
        this.hashMap = Array.apply(null, new Array(size)).map(function () { return new LinkedList_1["default"](); });
    }
    HashMap.prototype.hash = function (key) {
        return key.split('').map(function (char) { return char.charCodeAt(0); }).reduce(function (a, c) { return a + c; }) % this.hashMap.length;
    };
    return HashMap;
}());
var hm = new HashMap(5);
console.log(hm);
console.log(hm.hash('cat'));
