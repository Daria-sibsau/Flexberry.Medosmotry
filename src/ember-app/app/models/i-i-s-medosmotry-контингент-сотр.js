import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КонтингентСотрMixin
} from '../mixins/regenerated/models/i-i-s-medosmotry-контингент-сотр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КонтингентСотрMixin, Validations, {
});

defineProjections(Model);

export default Model;
