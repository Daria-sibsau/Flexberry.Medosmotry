import {
  defineNamespace,
  defineProjections,
  Model as ДолжностиMixin
} from '../mixins/regenerated/models/i-i-s-medosmotry-должности';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДолжностиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
