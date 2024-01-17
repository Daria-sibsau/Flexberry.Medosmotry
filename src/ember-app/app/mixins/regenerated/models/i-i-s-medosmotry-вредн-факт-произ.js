import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  классВредФактор: DS.belongsTo('i-i-s-medosmotry-класс-вред-фактор', { inverse: null, async: false }),
  индНапрМедосм: DS.belongsTo('i-i-s-medosmotry-инд-напр-медосм', { inverse: 'вреднФактПроиз', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-medosmotry-вредн-факт-произ.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  классВредФактор: {
    descriptionKey: 'models.i-i-s-medosmotry-вредн-факт-произ.validations.классВредФактор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  индНапрМедосм: {
    descriptionKey: 'models.i-i-s-medosmotry-вредн-факт-произ.validations.индНапрМедосм.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВреднФактПроизE', 'i-i-s-medosmotry-вредн-факт-произ', {
    номер: attr('Номер', { index: 0 }),
    классВредФактор: belongsTo('i-i-s-medosmotry-класс-вред-фактор', 'Вредные факторы', {
      вредныйФактор: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'вредныйФактор' })
  });
};
