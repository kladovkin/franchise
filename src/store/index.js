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
            description: 'for storage of personal belongings and\\or goods, available for private individuals and companies'
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
