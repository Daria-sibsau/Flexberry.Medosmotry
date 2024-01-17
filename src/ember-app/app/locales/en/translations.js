import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISMedosmotryДолжностиLForm from './forms/i-i-s-medosmotry-должности-l';
import IISMedosmotryИндНапрМедосмLForm from './forms/i-i-s-medosmotry-инд-напр-медосм-l';
import IISMedosmotryКлассВредФакторLForm from './forms/i-i-s-medosmotry-класс-вред-фактор-l';
import IISMedosmotryМедУчреждениеLForm from './forms/i-i-s-medosmotry-мед-учреждение-l';
import IISMedosmotryОрганизацииLForm from './forms/i-i-s-medosmotry-организации-l';
import IISMedosmotryПодразделениеLForm from './forms/i-i-s-medosmotry-подразделение-l';
import IISMedosmotryПриказМЗРLForm from './forms/i-i-s-medosmotry-приказ-м-з-р-l';
import IISMedosmotryСотрудникиLForm from './forms/i-i-s-medosmotry-сотрудники-l';
import IISMedosmotryСписокНаМедосмLForm from './forms/i-i-s-medosmotry-список-на-медосм-l';
import IISMedosmotryДолжностиEForm from './forms/i-i-s-medosmotry-должности-e';
import IISMedosmotryИндНапрМедосмEForm from './forms/i-i-s-medosmotry-инд-напр-медосм-e';
import IISMedosmotryКлассВредФакторEForm from './forms/i-i-s-medosmotry-класс-вред-фактор-e';
import IISMedosmotryМедУчреждениеEForm from './forms/i-i-s-medosmotry-мед-учреждение-e';
import IISMedosmotryОрганизацииEForm from './forms/i-i-s-medosmotry-организации-e';
import IISMedosmotryПодразделениеEForm from './forms/i-i-s-medosmotry-подразделение-e';
import IISMedosmotryПриказМЗРEForm from './forms/i-i-s-medosmotry-приказ-м-з-р-e';
import IISMedosmotryСотрудникиEForm from './forms/i-i-s-medosmotry-сотрудники-e';
import IISMedosmotryСписокНаМедосмEForm from './forms/i-i-s-medosmotry-список-на-медосм-e';
import IISMedosmotryВреднФактПроизModel from './models/i-i-s-medosmotry-вредн-факт-произ';
import IISMedosmotryДолжностиModel from './models/i-i-s-medosmotry-должности';
import IISMedosmotryИндНапрМедосмModel from './models/i-i-s-medosmotry-инд-напр-медосм';
import IISMedosmotryКлассВредФакторModel from './models/i-i-s-medosmotry-класс-вред-фактор';
import IISMedosmotryКонтингентСотрModel from './models/i-i-s-medosmotry-контингент-сотр';
import IISMedosmotryМедУчреждениеModel from './models/i-i-s-medosmotry-мед-учреждение';
import IISMedosmotryОрганизацииModel from './models/i-i-s-medosmotry-организации';
import IISMedosmotryПодразделениеModel from './models/i-i-s-medosmotry-подразделение';
import IISMedosmotryПриказМЗРModel from './models/i-i-s-medosmotry-приказ-м-з-р';
import IISMedosmotryСотрудникиModel from './models/i-i-s-medosmotry-сотрудники';
import IISMedosmotryСписокНаМедосмModel from './models/i-i-s-medosmotry-список-на-медосм';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-medosmotry-вредн-факт-произ': IISMedosmotryВреднФактПроизModel,
    'i-i-s-medosmotry-должности': IISMedosmotryДолжностиModel,
    'i-i-s-medosmotry-инд-напр-медосм': IISMedosmotryИндНапрМедосмModel,
    'i-i-s-medosmotry-класс-вред-фактор': IISMedosmotryКлассВредФакторModel,
    'i-i-s-medosmotry-контингент-сотр': IISMedosmotryКонтингентСотрModel,
    'i-i-s-medosmotry-мед-учреждение': IISMedosmotryМедУчреждениеModel,
    'i-i-s-medosmotry-организации': IISMedosmotryОрганизацииModel,
    'i-i-s-medosmotry-подразделение': IISMedosmotryПодразделениеModel,
    'i-i-s-medosmotry-приказ-м-з-р': IISMedosmotryПриказМЗРModel,
    'i-i-s-medosmotry-сотрудники': IISMedosmotryСотрудникиModel,
    'i-i-s-medosmotry-список-на-медосм': IISMedosmotryСписокНаМедосмModel
  },

  'application-name': 'Medosmotry',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Medosmotry',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Medosmotry',
          title: 'Medosmotry'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'индивидуальные-направления': {
          caption: 'Индивидуальные направления',
          title: 'Индивидуальные направления',
          'i-i-s-medosmotry-инд-напр-медосм-l': {
            caption: 'Индивидуальное направление на медосмотр',
            title: ''
          }
        },
        'формирование-списка-для-приказа': {
          caption: 'Формирование списка для приказа',
          title: 'Формирование списка для приказа',
          'i-i-s-medosmotry-список-на-медосм-l': {
            caption: 'Список на медосмотр',
            title: ''
          }
        },
        'справочная-информация': {
          caption: 'Справочная информация',
          title: 'Справочная информация',
          'i-i-s-medosmotry-приказ-м-з-р-l': {
            caption: 'Приказ МЗР',
            title: ''
          },
          'i-i-s-medosmotry-класс-вред-фактор-l': {
            caption: 'Классификатор вредных факторов',
            title: ''
          }
        },
        'организации-и-штат': {
          caption: 'Организации и штат',
          title: 'Организации и штат',
          'i-i-s-medosmotry-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-medosmotry-подразделение-l': {
            caption: 'Подразделение',
            title: ''
          },
          'i-i-s-medosmotry-мед-учреждение-l': {
            caption: 'Медицинское учреждение',
            title: ''
          },
          'i-i-s-medosmotry-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-medosmotry-должности-l': {
            caption: 'Должности',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-medosmotry-должности-l': IISMedosmotryДолжностиLForm,
    'i-i-s-medosmotry-инд-напр-медосм-l': IISMedosmotryИндНапрМедосмLForm,
    'i-i-s-medosmotry-класс-вред-фактор-l': IISMedosmotryКлассВредФакторLForm,
    'i-i-s-medosmotry-мед-учреждение-l': IISMedosmotryМедУчреждениеLForm,
    'i-i-s-medosmotry-организации-l': IISMedosmotryОрганизацииLForm,
    'i-i-s-medosmotry-подразделение-l': IISMedosmotryПодразделениеLForm,
    'i-i-s-medosmotry-приказ-м-з-р-l': IISMedosmotryПриказМЗРLForm,
    'i-i-s-medosmotry-сотрудники-l': IISMedosmotryСотрудникиLForm,
    'i-i-s-medosmotry-список-на-медосм-l': IISMedosmotryСписокНаМедосмLForm,
    'i-i-s-medosmotry-должности-e': IISMedosmotryДолжностиEForm,
    'i-i-s-medosmotry-инд-напр-медосм-e': IISMedosmotryИндНапрМедосмEForm,
    'i-i-s-medosmotry-класс-вред-фактор-e': IISMedosmotryКлассВредФакторEForm,
    'i-i-s-medosmotry-мед-учреждение-e': IISMedosmotryМедУчреждениеEForm,
    'i-i-s-medosmotry-организации-e': IISMedosmotryОрганизацииEForm,
    'i-i-s-medosmotry-подразделение-e': IISMedosmotryПодразделениеEForm,
    'i-i-s-medosmotry-приказ-м-з-р-e': IISMedosmotryПриказМЗРEForm,
    'i-i-s-medosmotry-сотрудники-e': IISMedosmotryСотрудникиEForm,
    'i-i-s-medosmotry-список-на-медосм-e': IISMedosmotryСписокНаМедосмEForm
  },

});

export default translations;
