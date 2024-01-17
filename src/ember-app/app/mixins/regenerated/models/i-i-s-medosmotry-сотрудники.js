import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  номер: DS.attr('number'),
  номерПаспорта: DS.attr('number'),
  пол: DS.attr('i-i-s-medosmotry-пол-сотрудника'),
  серияПаспорта: DS.attr('number'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-medosmotry-должности', { inverse: null, async: false }),
  подразделение: DS.belongsTo('i-i-s-medosmotry-подразделение', { inverse: null, async: false })
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-medosmotry-сотрудники.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-medosmotry-сотрудники.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерПаспорта: {
    descriptionKey: 'models.i-i-s-medosmotry-сотрудники.validations.номерПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-medosmotry-сотрудники.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серияПаспорта: {
    descriptionKey: 'models.i-i-s-medosmotry-сотрудники.validations.серияПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-medosmotry-сотрудники.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-medosmotry-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-medosmotry-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  подразделение: {
    descriptionKey: 'models.i-i-s-medosmotry-сотрудники.validations.подразделение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-medosmotry-сотрудники', {
    номер: attr('Номер', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    пол: attr('Пол', { index: 2 }),
    датаРождения: attr('Дата рождения', { index: 3 }),
    серияПаспорта: attr('Серия паспорта', { index: 4 }),
    номерПаспорта: attr('Номер паспорта', { index: 5 }),
    телефон: attr('Телефон', { index: 6 }),
    должности: belongsTo('i-i-s-medosmotry-должности', 'Должности', {
      наименование: attr('Должность', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'наименование' }),
    подразделение: belongsTo('i-i-s-medosmotry-подразделение', 'Подразделение', {
      наименование: attr('Подразделение', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-medosmotry-сотрудники', {
    номер: attr('Номер', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    пол: attr('Пол', { index: 2 }),
    датаРождения: attr('Дата рождения', { index: 3 }),
    серияПаспорта: attr('Серия паспорта', { index: 4 }),
    номерПаспорта: attr('Номер паспорта', { index: 5 }),
    телефон: attr('Телефон', { index: 6 }),
    должности: belongsTo('i-i-s-medosmotry-должности', 'Должность', {
      наименование: attr('Должность', { index: 7 })
    }, { index: -1, hidden: true }),
    подразделение: belongsTo('i-i-s-medosmotry-подразделение', 'Подразделение', {
      наименование: attr('Подразделение', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
