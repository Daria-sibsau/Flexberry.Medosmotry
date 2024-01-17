import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вредныйФактор: DS.attr('string'),
  подразделение: DS.belongsTo('i-i-s-medosmotry-подразделение', { inverse: null, async: false })
});

export let ValidationRules = {
  вредныйФактор: {
    descriptionKey: 'models.i-i-s-medosmotry-класс-вред-фактор.validations.вредныйФактор.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подразделение: {
    descriptionKey: 'models.i-i-s-medosmotry-класс-вред-фактор.validations.подразделение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлассВредФакторE', 'i-i-s-medosmotry-класс-вред-фактор', {
    вредныйФактор: attr('Вредный фактор', { index: 0 }),
    подразделение: belongsTo('i-i-s-medosmotry-подразделение', 'Подразделение', {
      наименование: attr('Подразделение', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('КлассВредФакторL', 'i-i-s-medosmotry-класс-вред-фактор', {
    вредныйФактор: attr('Вредный фактор', { index: 0 }),
    подразделение: belongsTo('i-i-s-medosmotry-подразделение', 'Подразделение', {
      наименование: attr('Подразделение', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
