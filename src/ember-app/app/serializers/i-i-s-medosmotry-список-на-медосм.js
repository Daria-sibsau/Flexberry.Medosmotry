import { Serializer as СписокНаМедосмSerializer } from
  '../mixins/regenerated/serializers/i-i-s-medosmotry-список-на-медосм';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СписокНаМедосмSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
