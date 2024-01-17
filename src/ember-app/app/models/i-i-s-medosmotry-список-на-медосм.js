import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СписокНаМедосмMixin
} from '../mixins/regenerated/models/i-i-s-medosmotry-список-на-медосм';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СписокНаМедосмMixin, Validations, {
});

defineProjections(Model);

export default Model;
