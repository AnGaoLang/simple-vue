"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyVue = (function () {
    function MyVue(options) {
        this.$el = options.el;
        this.$data = options.data;
        this.$methods = options.methods;
        this.$options = options;
        return this._proxyData(this.$data);
    }
    MyVue.prototype._proxyData = function (data) {
        var _this = this;
        Object.keys(data).forEach(function (key) {
            _this[key] = data[key];
        });
        var that = this;
        return new Proxy(this, {
            get: function (target, propKey) {
                return data[propKey];
            },
            set: function (target, propKey, value) {
                data[propKey] = value;
                console.log(that[propKey], data[propKey]);
                return true;
            },
            deleteProperty: function (target, propKey) {
                delete data[propKey];
                return true;
            }
        });
    };
    return MyVue;
}());
exports.default = MyVue;
//# sourceMappingURL=index.js.map