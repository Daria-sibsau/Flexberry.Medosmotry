import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.индивидуальные-направления.caption'),
          title: i18n.t('forms.application.sitemap.индивидуальные-направления.title'),
          children: [{
            link: 'i-i-s-medosmotry-инд-напр-медосм-l',
            caption: i18n.t('forms.application.sitemap.индивидуальные-направления.i-i-s-medosmotry-инд-напр-медосм-l.caption'),
            title: i18n.t('forms.application.sitemap.индивидуальные-направления.i-i-s-medosmotry-инд-напр-медосм-l.title'),
            icon: 'list',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.формирование-списка-для-приказа.caption'),
          title: i18n.t('forms.application.sitemap.формирование-списка-для-приказа.title'),
          children: [{
            link: 'i-i-s-medosmotry-список-на-медосм-l',
            caption: i18n.t('forms.application.sitemap.формирование-списка-для-приказа.i-i-s-medosmotry-список-на-медосм-l.caption'),
            title: i18n.t('forms.application.sitemap.формирование-списка-для-приказа.i-i-s-medosmotry-список-на-медосм-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочная-информация.caption'),
          title: i18n.t('forms.application.sitemap.справочная-информация.title'),
          children: [{
            link: 'i-i-s-medosmotry-приказ-м-з-р-l',
            caption: i18n.t('forms.application.sitemap.справочная-информация.i-i-s-medosmotry-приказ-м-з-р-l.caption'),
            title: i18n.t('forms.application.sitemap.справочная-информация.i-i-s-medosmotry-приказ-м-з-р-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-medosmotry-класс-вред-фактор-l',
            caption: i18n.t('forms.application.sitemap.справочная-информация.i-i-s-medosmotry-класс-вред-фактор-l.caption'),
            title: i18n.t('forms.application.sitemap.справочная-информация.i-i-s-medosmotry-класс-вред-фактор-l.title'),
            icon: 'table',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.организации-и-штат.caption'),
          title: i18n.t('forms.application.sitemap.организации-и-штат.title'),
          children: [{
            link: 'i-i-s-medosmotry-организации-l',
            caption: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-medosmotry-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-medosmotry-организации-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-medosmotry-подразделение-l',
            caption: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-medosmotry-подразделение-l.caption'),
            title: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-medosmotry-подразделение-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-medosmotry-мед-учреждение-l',
            caption: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-medosmotry-мед-учреждение-l.caption'),
            title: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-medosmotry-мед-учреждение-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-medosmotry-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-medosmotry-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-medosmotry-сотрудники-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-medosmotry-должности-l',
            caption: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-medosmotry-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.организации-и-штат.i-i-s-medosmotry-должности-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})