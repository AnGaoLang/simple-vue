 import Observer from './observer/index';

 export default class MyVue implements IVue {
  public $el:Element| string | never
  public $data: IVOptions.Data
  public $methods: IVOptions.Methods
  public $options: IVueOptions
  [index:string]:any
  
  constructor(options?: IVueOptions) {
    // this.$el = options.el && document.querySelector(options.el);
    this.$el = options.el;
    this.$data = options.data;
    this.$methods = options .methods;
    this.$options = options;
    if (this.$el) {
      new Observer(this.$data)
    }

    return this._proxyData(this.$data);
  }

  _proxyData(data: IVOptions.Data) {
    Object.keys(data).forEach((key: string) => {
      this[key] = data[key]
    });
    return new Proxy(this, {
      get(target, propKey: any) {
        return data[propKey]
      },
      set(target, propKey: any, value) {
        data[propKey] = value;
        return true;
      },
      deleteProperty(target, propKey: any) {
        delete data[propKey];
        return true;
      }
    })
  }
}