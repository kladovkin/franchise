import { createStore } from 'vuex';

export default createStore({
  state: {
    locale: 'ru',
    i18n: {
      ru: {
        menu: {
          about: 'О нас',
          benefits: 'Преимущества',
          requirements: 'С кем работаем',
          roadmap: 'Порядок действий',
          cases: 'Кейсы',
          button: 'Оставить заявку'
        },
        slide_01: {
          h1: 'Технологичный бизнес на&nbsp;вашей&nbsp;территории',
          h2: 'Станьте партнером и зарабатывайте на&nbsp;своей&nbsp;недвижимости',
          lock: {
            first: 'Включи',
            second: 'свой бизнес'
          },
          collapsed: 'Ставка доходности с Кладовкин',
          button: 'Узнать больше'
        },
        slide_02: {
          h2: 'новый подход к бизнесу в сфере недвижимости',
          note: 'Ставки доходности основных сегментов арендной недвижимости в России:',
          list_1: 'Большее количество арендаторов',
          list_2: 'Повышенная арендная ставка',
          list_3: 'Постоянная заполненность склада',
          list_4: 'Растущий рынок',
          graph: {
            residential: 'Жильё',
            offices: 'Офисы',
            street_retail: 'Стрит&nbsp;ритейл',
            warehouses: 'Склады'
          },
          finale: {
            strong: 'Self Storage — это склады, оборудованные боксами',
            description: 'для хранения вещей или товаров физическими или юридическими лицами'
          }
        },
        slide_03: {
          h2: 'Кладовкин &mdash; технологический лидер российского рынка Self&nbsp;Storage',
          entries: {
            age: 'Года&nbsp;на&nbsp;рынке',
            customers: 'Благодарных арендаторов',
            storages: 'Складов в&nbsp;Москве',
            square: 'Площадь&nbsp;складов'
          }
        },
        slide_04: {
          h2: 'Организуем эффективный бизнес Self Storage с помощью IT-технологий',
          note: 'Полная автоматизация бизнес-процессов для собственника',
          switcher: {
            owner: 'Владельцам',
            tenant: 'Арендаторам'
          },
          list_1: {
            title: 'Автоматизированные процессы управления',
            body: 'Склад может полноценно функционировать без постоянного ' +
              'присутствия персонала: охраны, менеджеров и администраторов'
          },
          list_2: {
            title: 'Личный кабинет собственника',
            body: 'С доступом к ежедневным аналитическим отчетам и ключевым' +
              'показателям эффективности (<span>EBITDA</span>, <span>LTV</span>, ' +
              '<span>IRR</span> и др.)'
          },
          list_3: {
            title: 'Личный кабинет сотрудника',
            body: 'С системой функциональных обязанностей' +
              'и должностных инструкций, способной подсказать сотруднику' +
              'его следующий шаг'
          },
          list_4: {
            title: 'Сквозная веб-аналитика'
          }
        }
      },
      en: {
        menu: {
          about: 'About us',
          benefits: 'Benefits',
          requirements: 'Requirements',
          roadmap: 'Roadmap',
          cases: 'Cases',
          button: 'Submit an enuiry'
        },
        slide_01: {
          h1: 'Hi-Tech business in your&nbsp;premises',
          h2: 'Become a partner and make money on your real estate',
          lock: {
            first: 'Turn on',
            second: 'your business'
          },
          collapsed: 'yield rate together with Kladovkin',
          button: 'Learn more'
        },
        slide_02: {
          h2: 'new approach in real estate business',
          note: 'Yield rates for main segments of commercial real estate in Russia',
          list_1: 'Big amount of small tenants',
          list_2: 'High rental rates',
          list_3: 'Constant occupancy of sites',
          list_4: 'Steadily growing market',
          graph: {
            residential: 'Residential',
            offices: 'Offices',
            street_retail: 'Street&nbsp;retail',
            warehouses: 'Warehouses'
          },
          finale: {
            strong: 'Self Storage is warehouses equiped with many boxes',
            description: 'for storage of personal belongings and\\or goods, ' +
              'available for private individuals and companies'
          }
        },
        slide_03: {
          h2: 'Kladovkin — technological leader of Russian&nbsp;Self Storage market',
          entries: {
            age: 'Years&nbsp;on&nbsp;the&nbsp;market',
            customers: 'Grateful customers',
            storages: 'Stores&nbsp;in&nbsp;Moscow',
            square: 'Overall&nbsp;usable&nbsp;space '
          }
        },
        slide_04: {
          h2: 'Establishing highly efficient business with helping hand of IT-technologies ',
          note: 'Complete automatization of business processes for a partner',
          switcher: {
            owner: 'For owners',
            tenant: 'For tenants'
          },
          list_1: {
            title: 'Automated management routines',
            body: 'Your store can function without constant staff presence: ' +
              'no managers, administrators and security needed.'
          },
          list_2: {
            title: 'Partner’s personal account',
            body: 'It provides access to various daily reports and other key ' +
              'performance indicators like EBITDA, LTV, IRR and so on.'
          },
          list_3: {
            title: 'Employee’s personal account',
            body: 'With functional duty and instruction system, ' +
              'that is capable to advise a next step to an employee'
          },
          list_4: {
            title: 'End-to-end web analytics'
          }
        }
      }
    }
  },
  mutations: {
    SET_LOCALE(state, locale) {
      state.locale = locale;
    }
  },
  actions: {
    setLocale({ commit }, { locale }) {
      // console.log('store:' + locale);
      const normalized_locale = locale == 'en' ? 'en' : 'ru';
      commit('SET_LOCALE', normalized_locale);
    }
  },
  modules: {
  }
});
