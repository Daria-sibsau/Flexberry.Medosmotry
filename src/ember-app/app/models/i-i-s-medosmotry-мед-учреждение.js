import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МедУчреждениеMixin
} from '../mixins/regenerated/models/i-i-s-medosmotry-мед-учреждение';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МедУчреждениеMixin, Validations, {
});

defineProjections(Model);

export default Model;
