import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПолСотрудникаEnum from '../enums/i-i-s-medosmotry-пол-сотрудника';

export default FlexberryEnum.extend({
  enum: ПолСотрудникаEnum,
  sourceType: 'IIS.Medosmotry.ПолСотрудника'
});
