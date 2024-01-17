import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерПункта: DS.attr('string')
});

export let ValidationRules = {
  номерПункта: {
    descriptionKey: 'models.i-i-s-medosmotry-приказ-м-з-р.validations.номерПункта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриказМЗРE', 'i-i-s-medosmotry-приказ-м-з-р', {
    номерПункта: attr('Номер пункта', { index: 0 })
  });

  modelClass.defineProjection('ПриказМЗРL', 'i-i-s-medosmotry-приказ-м-з-р', {
    номерПункта: attr('Номер пункта', { index: 0 })
  });
};
