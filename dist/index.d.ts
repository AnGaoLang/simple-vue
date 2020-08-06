export default class MyVue implements IVue {
    $el: Element | string | never;
    $data: IVOptions.Data;
    $methods: IVOptions.Methods;
    $options: IVueOptions;
    [index: string]: any;
    constructor(options?: IVueOptions);
    _proxyData(data: IVOptions.Data): this;
}
