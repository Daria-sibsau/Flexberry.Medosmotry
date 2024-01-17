import {
  defineNamespace,
  defineProjections,
  Model as ИндНапрМедосмMixin
} from '../mixins/regenerated/models/i-i-s-medosmotry-инд-напр-медосм';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИндНапрМедосмMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
