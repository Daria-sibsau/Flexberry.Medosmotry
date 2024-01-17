import {
  defineNamespace,
  defineProjections,
  Model as КлассВредФакторMixin
} from '../mixins/regenerated/models/i-i-s-medosmotry-класс-вред-фактор';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КлассВредФакторMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
