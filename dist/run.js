"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var VM = new index_1.default({
    el: '#app',
    data: {
        person: {
            name: '只会番茄炒蛋22',
            age: 18,
            sex: '男'
        },
        msg: '学习MVVM实现原理',
        htmlStr: '<h1>我是html指令渲染的</h1>'
    },
    methods: {
        btnClick: function () {
            console.log(this.msg);
        }
    }
});
console.log(VM);
VM.msg = '1111111111';
console.log(VM.msg);
debugger;
//# sourceMappingURL=run.js.map