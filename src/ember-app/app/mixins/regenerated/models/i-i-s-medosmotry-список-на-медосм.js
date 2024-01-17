import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номер: DS.attr('number'),
  контингентСотр: DS.hasMany('i-i-s-medosmotry-контингент-сотр', { inverse: 'списокНаМедосм', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-medosmotry-список-на-медосм.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-medosmotry-список-на-медосм.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контингентСотр: {
    descriptionKey: 'models.i-i-s-medosmotry-список-на-медосм.validations.контингентСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СписокНаМедосмE', 'i-i-s-medosmotry-список-на-медосм', {
    номер: attr('Номер документа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    контингентСотр: hasMany('i-i-s-medosmotry-контингент-сотр', 'Контингент сотрудников', {
      подразделение: belongsTo('i-i-s-medosmotry-подразделение', 'Подразделение', {
        наименование: attr('Подразделение', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'наименование' }),
      мужчины: attr('Мужчины', { index: 2 }),
      женщины: attr('Женщины', { index: 3 }),
      до21Года: attr('До 21 года', { index: 4 }),
      всего: attr('Всего', { index: 5 }),
      классВредФактор: belongsTo('i-i-s-medosmotry-класс-вред-фактор', 'Вредный фактор', {
        вредныйФактор: attr('Вредный фактор', { index: 7, hidden: true })
      }, { index: 6, displayMemberPath: 'вредныйФактор' }),
      приказМЗР: belongsTo('i-i-s-medosmotry-приказ-м-з-р', 'Приказ МЗР', {
        номерПункта: attr('Номер пункта', { index: 9, hidden: true })
      }, { index: 8, displayMemberPath: 'номерПункта' }),
      периодичность: attr('Периодичность', { index: 10 })
    })
  });

  modelClass.defineProjection('СписокНаМедосмL', 'i-i-s-medosmotry-список-на-медосм', {
    номер: attr('Номер документа', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });
};
