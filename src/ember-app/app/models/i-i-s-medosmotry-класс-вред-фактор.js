import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КлассВредФакторMixin
} from '../mixins/regenerated/models/i-i-s-medosmotry-класс-вред-фактор';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КлассВредФакторMixin, Validations, {
});

defineProjections(Model);

export default Model;
