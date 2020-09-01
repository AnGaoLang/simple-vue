import Vue from './core/index';

let VM = new Vue({
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
    btnClick() {
      console.log(this.msg)
    }
  }
});
console.log(VM)
VM.msg = '1111111111'
console.log(VM.msg)
debugger