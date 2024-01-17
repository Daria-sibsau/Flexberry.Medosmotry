import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-medosmotry-приказ-м-з-р', 'Unit | Serializer | i-i-s-medosmotry-приказ-м-з-р', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-medosmotry-приказ-м-з-р',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-medosmotry-период-мед',
    'transform:i-i-s-medosmotry-пол-сотрудника',

    'model:i-i-s-medosmotry-вредн-факт-произ',
    'model:i-i-s-medosmotry-должности',
    'model:i-i-s-medosmotry-инд-напр-медосм',
    'model:i-i-s-medosmotry-класс-вред-фактор',
    'model:i-i-s-medosmotry-контингент-сотр',
    'model:i-i-s-medosmotry-мед-учреждение',
    'model:i-i-s-medosmotry-организации',
    'model:i-i-s-medosmotry-подразделение',
    'model:i-i-s-medosmotry-приказ-м-з-р',
    'model:i-i-s-medosmotry-сотрудники',
    'model:i-i-s-medosmotry-список-на-медосм',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
