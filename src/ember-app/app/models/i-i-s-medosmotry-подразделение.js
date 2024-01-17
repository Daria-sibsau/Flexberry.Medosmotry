import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПодразделениеMixin
} from '../mixins/regenerated/models/i-i-s-medosmotry-подразделение';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПодразделениеMixin, Validations, {
});

defineProjections(Model);

export default Model;
