import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номер: DS.attr('number'),
  медУчреждение: DS.belongsTo('i-i-s-medosmotry-мед-учреждение', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-medosmotry-организации', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-medosmotry-сотрудники', { inverse: null, async: false }),
  вреднФактПроиз: DS.hasMany('i-i-s-medosmotry-вредн-факт-произ', { inverse: 'индНапрМедосм', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-medosmotry-инд-напр-медосм.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-medosmotry-инд-напр-медосм.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  медУчреждение: {
    descriptionKey: 'models.i-i-s-medosmotry-инд-напр-медосм.validations.медУчреждение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-medosmotry-инд-напр-медосм.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-medosmotry-инд-напр-медосм.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  вреднФактПроиз: {
    descriptionKey: 'models.i-i-s-medosmotry-инд-напр-медосм.validations.вреднФактПроиз.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИндНапрМедосмE', 'i-i-s-medosmotry-инд-напр-медосм', {
    номер: attr('Номер документа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    организации: belongsTo('i-i-s-medosmotry-организации', 'Организации', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    медУчреждение: belongsTo('i-i-s-medosmotry-мед-учреждение', 'Медицинское учреждение', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' }),
    сотрудники: belongsTo('i-i-s-medosmotry-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 7, hidden: true }),
      должности: belongsTo('i-i-s-medosmotry-должности', '', {
        наименование: attr('Должность', { index: 8 })
      }, { index: -1, hidden: true }),
      подразделение: belongsTo('i-i-s-medosmotry-подразделение', '', {
        наименование: attr('Подразделение', { index: 9 })
      }, { index: -1, hidden: true })
    }, { index: 6, displayMemberPath: 'фИО' }),
    вреднФактПроиз: hasMany('i-i-s-medosmotry-вредн-факт-произ', 'Вредные факторы производства', {
      номер: attr('Номер', { index: 0 }),
      классВредФактор: belongsTo('i-i-s-medosmotry-класс-вред-фактор', 'Вредные факторы', {
        вредныйФактор: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'вредныйФактор' })
    })
  });

  modelClass.defineProjection('ИндНапрМедосмL', 'i-i-s-medosmotry-инд-напр-медосм', {
    номер: attr('Номер документа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сотрудники: belongsTo('i-i-s-medosmotry-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true }),
    медУчреждение: belongsTo('i-i-s-medosmotry-мед-учреждение', 'Медицинское учреждение', {
      наименование: attr('Медицинское учреждение', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
