import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-medosmotry-должности-l');
  this.route('i-i-s-medosmotry-должности-e',
  { path: 'i-i-s-medosmotry-должности-e/:id' });
  this.route('i-i-s-medosmotry-должности-e.new',
  { path: 'i-i-s-medosmotry-должности-e/new' });
  this.route('i-i-s-medosmotry-инд-напр-медосм-l');
  this.route('i-i-s-medosmotry-инд-напр-медосм-e',
  { path: 'i-i-s-medosmotry-инд-напр-медосм-e/:id' });
  this.route('i-i-s-medosmotry-инд-напр-медосм-e.new',
  { path: 'i-i-s-medosmotry-инд-напр-медосм-e/new' });
  this.route('i-i-s-medosmotry-класс-вред-фактор-l');
  this.route('i-i-s-medosmotry-класс-вред-фактор-e',
  { path: 'i-i-s-medosmotry-класс-вред-фактор-e/:id' });
  this.route('i-i-s-medosmotry-класс-вред-фактор-e.new',
  { path: 'i-i-s-medosmotry-класс-вред-фактор-e/new' });
  this.route('i-i-s-medosmotry-мед-учреждение-l');
  this.route('i-i-s-medosmotry-мед-учреждение-e',
  { path: 'i-i-s-medosmotry-мед-учреждение-e/:id' });
  this.route('i-i-s-medosmotry-мед-учреждение-e.new',
  { path: 'i-i-s-medosmotry-мед-учреждение-e/new' });
  this.route('i-i-s-medosmotry-организации-l');
  this.route('i-i-s-medosmotry-организации-e',
  { path: 'i-i-s-medosmotry-организации-e/:id' });
  this.route('i-i-s-medosmotry-организации-e.new',
  { path: 'i-i-s-medosmotry-организации-e/new' });
  this.route('i-i-s-medosmotry-подразделение-l');
  this.route('i-i-s-medosmotry-подразделение-e',
  { path: 'i-i-s-medosmotry-подразделение-e/:id' });
  this.route('i-i-s-medosmotry-подразделение-e.new',
  { path: 'i-i-s-medosmotry-подразделение-e/new' });
  this.route('i-i-s-medosmotry-приказ-м-з-р-l');
  this.route('i-i-s-medosmotry-приказ-м-з-р-e',
  { path: 'i-i-s-medosmotry-приказ-м-з-р-e/:id' });
  this.route('i-i-s-medosmotry-приказ-м-з-р-e.new',
  { path: 'i-i-s-medosmotry-приказ-м-з-р-e/new' });
  this.route('i-i-s-medosmotry-сотрудники-l');
  this.route('i-i-s-medosmotry-сотрудники-e',
  { path: 'i-i-s-medosmotry-сотрудники-e/:id' });
  this.route('i-i-s-medosmotry-сотрудники-e.new',
  { path: 'i-i-s-medosmotry-сотрудники-e/new' });
  this.route('i-i-s-medosmotry-список-на-медосм-l');
  this.route('i-i-s-medosmotry-список-на-медосм-e',
  { path: 'i-i-s-medosmotry-список-на-медосм-e/:id' });
  this.route('i-i-s-medosmotry-список-на-медосм-e.new',
  { path: 'i-i-s-medosmotry-список-на-медосм-e/new' });
});

export default Router;
