"use strict";
exports.__esModule = true;
var LinkedList_1 = require("../LinkedList/LinkedList");
;
var Node_1 = require("../Node/Node");
var HashMap = /** @class */ (function () {
    function HashMap(size) {
        this.hashMap = Array.apply(null, new Array(size)).map(function () { return new LinkedList_1["default"](); });
    }
    HashMap.prototype.hash = function (key) {
        return key.split('').map(function (char) { return char.charCodeAt(0); }).reduce(function (a, c) { return a + c; }) % this.hashMap.length;
    };
    HashMap.prototype.assign = function (key, value) {
        var arrayIndex = this.hash(key);
        var list = this.hashMap[arrayIndex];
        var current = list.head;
        var previous = null;
        if (!current) {
            list.head = new Node_1["default"]({ key: key, value: value });
        }
        else {
            while (current) {
                if (current.data.key === key) {
                    current.data.value = value;
                    return;
                }
                previous = current;
                current = current.getNextNode();
            }
            previous.setNextNode(new Node_1["default"]({ key: key, value: value }));
        }
    };
    HashMap.prototype.retrieve = function (key) {
        var arrayIndex = this.hash(key);
        var list = this.hashMap[arrayIndex];
        var current = list.head;
        if (!current) {
            return null;
        }
        while (current) {
            if (current.data.key === key) {
                return current.data.value;
            }
            current = current.getNextNode();
        }
        return null;
    };
    return HashMap;
}());
var hm = new HashMap(5);
hm.assign('cat', 'felix');
hm.assign('act', 'play');
hm.assign('tac', 'tic');
console.log(hm.retrieve('cat'));
console.log(hm.retrieve('tca'));
