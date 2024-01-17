import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПериодМедEnum from '../enums/i-i-s-medosmotry-период-мед';

export default FlexberryEnum.extend({
  enum: ПериодМедEnum,
  sourceType: 'IIS.Medosmotry.ПериодМед'
});
