import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-medosmotry-вредн-факт-произ', 'Unit | Model | i-i-s-medosmotry-вредн-факт-произ', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
