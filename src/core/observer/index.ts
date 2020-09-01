import {
  defProperty, 
} from '../utils/index';

export default class Observer {
  constructor(value: IVOptions.Data) {
    this.value = value;
    defProperty(value, '_obj_', this);
    if (Array.isArray(value)) {

    } else {

    }
  }
}