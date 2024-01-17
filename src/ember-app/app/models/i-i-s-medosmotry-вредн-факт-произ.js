import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ВреднФактПроизMixin
} from '../mixins/regenerated/models/i-i-s-medosmotry-вредн-факт-произ';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ВреднФактПроизMixin, Validations, {
});

defineProjections(Model);

export default Model;
