import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      классВредФактор: { serialize: 'odata-id', deserialize: 'records' },
      подразделение: { serialize: 'odata-id', deserialize: 'records' },
      приказМЗР: { serialize: 'odata-id', deserialize: 'records' },
      списокНаМедосм: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
