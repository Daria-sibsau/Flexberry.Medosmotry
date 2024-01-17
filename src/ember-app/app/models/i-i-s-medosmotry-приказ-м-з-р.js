import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПриказМЗРMixin
} from '../mixins/regenerated/models/i-i-s-medosmotry-приказ-м-з-р';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПриказМЗРMixin, Validations, {
});

defineProjections(Model);

export default Model;
