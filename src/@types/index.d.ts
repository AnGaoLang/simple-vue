declare const sym: unique symbol // 声明唯一的symbol

declare namespace IVOptions {
  type El = string
  
  interface Data {
    [Symbol.toStringTag]?: any
    [sym]?:any
    [index: string]: any
  }
  
  interface Methods {
    [index: string]: () => any
  }
}

interface IVueOptions {
  el: IVOptions.El
  data: IVOptions.Data
  methods: IVOptions.Methods
}

declare interface IVue {
  $el: Element | string | never
  $data: IVOptions.Data
  $methods: IVOptions.Methods
  $options: IVueOptions
  [index:string]: any
  [sym]?:any
  [Symbol.toStringTag]?: any

  _proxyData(data: IVOptions.Data): IVue
}