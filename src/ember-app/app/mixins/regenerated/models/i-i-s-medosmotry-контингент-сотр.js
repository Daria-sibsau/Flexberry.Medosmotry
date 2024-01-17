import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  всего: DS.attr('number'),
  до21Года: DS.attr('number'),
  женщины: DS.attr('number'),
  мужчины: DS.attr('number'),
  периодичность: DS.attr('i-i-s-medosmotry-период-мед'),
  классВредФактор: DS.belongsTo('i-i-s-medosmotry-класс-вред-фактор', { inverse: null, async: false }),
  подразделение: DS.belongsTo('i-i-s-medosmotry-подразделение', { inverse: null, async: false }),
  приказМЗР: DS.belongsTo('i-i-s-medosmotry-приказ-м-з-р', { inverse: null, async: false }),
  списокНаМедосм: DS.belongsTo('i-i-s-medosmotry-список-на-медосм', { inverse: 'контингентСотр', async: false })
});

export let ValidationRules = {
  всего: {
    descriptionKey: 'models.i-i-s-medosmotry-контингент-сотр.validations.всего.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  до21Года: {
    descriptionKey: 'models.i-i-s-medosmotry-контингент-сотр.validations.до21Года.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  женщины: {
    descriptionKey: 'models.i-i-s-medosmotry-контингент-сотр.validations.женщины.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  мужчины: {
    descriptionKey: 'models.i-i-s-medosmotry-контингент-сотр.validations.мужчины.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  периодичность: {
    descriptionKey: 'models.i-i-s-medosmotry-контингент-сотр.validations.периодичность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  классВредФактор: {
    descriptionKey: 'models.i-i-s-medosmotry-контингент-сотр.validations.классВредФактор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  подразделение: {
    descriptionKey: 'models.i-i-s-medosmotry-контингент-сотр.validations.подразделение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  приказМЗР: {
    descriptionKey: 'models.i-i-s-medosmotry-контингент-сотр.validations.приказМЗР.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокНаМедосм: {
    descriptionKey: 'models.i-i-s-medosmotry-контингент-сотр.validations.списокНаМедосм.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтингентСотрE', 'i-i-s-medosmotry-контингент-сотр', {
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
  });
};
