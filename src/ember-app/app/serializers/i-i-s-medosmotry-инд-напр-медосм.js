import { Serializer as ИндНапрМедосмSerializer } from
  '../mixins/regenerated/serializers/i-i-s-medosmotry-инд-напр-медосм';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИндНапрМедосмSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
