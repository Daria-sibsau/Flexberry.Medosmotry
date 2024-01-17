import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  наименование: DS.attr('string'),
  номерСчета: DS.attr('number'),
  почта: DS.attr('string'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-medosmotry-мед-учреждение.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-medosmotry-мед-учреждение.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерСчета: {
    descriptionKey: 'models.i-i-s-medosmotry-мед-учреждение.validations.номерСчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-medosmotry-мед-учреждение.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-medosmotry-мед-учреждение.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МедУчреждениеE', 'i-i-s-medosmotry-мед-учреждение', {
    наименование: attr('Наименование', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    почта: attr('Почта', { index: 2 }),
    номерСчета: attr('Номер счета', { index: 3 }),
    телефон: attr('Телефон', { index: 4 })
  });

  modelClass.defineProjection('МедУчреждениеL', 'i-i-s-medosmotry-мед-учреждение', {
    наименование: attr('Наименование', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    почта: attr('Почта', { index: 2 }),
    номерСчета: attr('Номер счета', { index: 3 }),
    телефон: attr('Телефон', { index: 4 })
  });
};
