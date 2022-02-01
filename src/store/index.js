/* eslint max-len: 0 */
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
          h1: 'Станьте партнером Кладовкин и начните получать доход с первого дня работы склада',
          h2: 'Мы построим технологичный бизнес на основе вашего помещения и возьмем управление на себя.',
          yield: 'годовых — доходность вложений<br>в переоборудование помещения',
          button: 'Стать партнером Кладовкин',
          learn_more: 'Узнать больше'
        },
        slide_02: {
          h2: {
            red: 'Рынок self storage в России',
            other: 'находится на стадии активного роста'
          },
          note: {
            red: 'Self storage',
            other: '– это сдача в аренду помещений для хранения личных вещей, товаров или документов для бизнеса в индивидуальных кладовках'
          },
          block_1: {
            headline: '2 750 ₽',
            note: 'достигает арендная ставка за 1 м2 в месяц в сегменте Self storage'
          },
          block_2: {
            headline: '5-10%',
            note: 'годовой прирост площадей Self storage в Москве'
          },
          block_3: {
            headline: '95%',
            note: 'средняя наполняемость складов Self storage в Москве '
          },
          slide_1: {
            note: '"Спрос на склады в России достиг максимального уровня за 10 лет. Для развития интернет-торговли в регионах потребуется 1,5 млн кв. м складских площадей в ближайшие три года"'
          },
          slide_2: {
            note: '"Спрос на склады в России достиг максимального уровня за 10 лет. Для развития интернет-торговли в регионах потребуется 1,5 млн кв. м складских площадей в ближайшие три года"'
          },
          slide_3: {
            note: '"Спрос на склады в России достиг максимального уровня за 10 лет. Для развития интернет-торговли в регионах потребуется 1,5 млн кв. м складских площадей в ближайшие три года"'
          }
        },
        slide_03: {
          h2: {
            red: 'Кладовкин',
            other: '– единственная компания в России, обладающая тремя ключевыми компетенциями в self storage'
          },
          h2_note: 'Мы независимая компания, которая все умеет сама',
          picture_block_1: {
            headline: '4+',
            note: 'Года на рынке'
          },
          picture_block_2: {
            headline: '3 500+',
            note: 'Благодарных арендаторов'
          },
          picture_block_3: {
            headline: '10',
            note: 'Складов в Москве'
          },
          picture_block_4: {
            headline: '20 000 м²',
            note: 'Площадь складов'
          },
          block_1: {
            headline: 'Управляющая компания',
            note: 'Мы знаем, как управлять складами, чтобы они приносили прибль.'
          },
          block_2: {
            headline: 'IT компания',
            note: 'Организуем эффективный бизнес Self Storage с помощью собственных IT-технологий'
          },
          block_3: {
            headline: 'Производитель оборудования',
            note: 'С 2011 года производим поставляем оборудование для крупнейших операторов Self Storage в России'
          },
          details: 'Подробнее',
          block_note: {
            text: 'Больше информации вы можете узнать из ',
            link: 'нашей презентации'
          },
          button: 'Стать партнером Кладовкин'
        },
        slide_04: {
          headline: 'Посмотрите видео об услугах компании Кладовкин'
        },
        slide_05: {
          h2: {
            red: 'Получайте доход от переоборудования',
            other: 'помещения в склад с Кладовкин'
          },
          h2_note: 'Пример экономических и операционных показателей проекта, реализованного в отапливаемом помещении производственного или складского назначения',
          block_1: {
            headline: '165 м²',
            note: 'Площадь помещения'
          },
          block_2: {
            headline: '1 710 000 ₽',
            note: 'Стоимость переоборудования'
          },
          block_3: {
            headline: '2 мес.',
            note: 'Минимальный срок запуска проекта'
          },
          block_4: {
            headline: 'Х ХХХ ХХХ ₽',
            note: 'Выручка в месяц'
          },
          block_5: {
            headline: 'Х ХХХ ХХХ ₽',
            note: 'Прибыль в месяц'
          },
          block_6: {
            headline: '17 мес.',
            note: 'Окупаемость'
          },
          block_summary: {
            headline: {
              number: '40%',
              text: 'годовых'
            },
            note: 'доходность вложений в переоборудование помещения'
          },
          button: 'Стать партнером Кладовкин'
        },
        slide_06: {
          h2: 'Станьте партнером и откройте автоматизированный бизнес под ключ' +
            '<br><span>за&nbsp;2&nbsp;месяца</span>',
          days: 'дня',
          days_2: 'дней',
          info_1: {
            title: 'Сбор предварительной информации о&nbsp;помещении',
            body: 'и расчет технико-экономических показателей&nbsp;склада'
          },
          info_2: {
            title: 'Подготовка документов',
            body: 'и заключение договора',
            note: {
              price: '0 рублей',
              description: 'концессионный взнос'
            }
          },
          info_3: {
            title: 'Разработка и согласование дизайн-проекта',
            body: 'Сбор предварительной информации о помещениии, расчет ' +
              'технико-экономических показателей склада'
          },
          info_4: {
            title: 'Изготовление, поставка и&nbsp;монтаж оборудования',
            body: 'Изготовим и произведем поставку оборудования собственной '+
              'разработки с гарантией качества и сроков оснащения',
            note: {
              price: '8000 - 12000 руб./м²',
              description: 'переоборудование помещения'
            }
          },
          info_5: {
            title: 'Пуско-наладочные работы охранной системы, интеграция с IT-платформой',
            body: 'Служба монтажа быстро и качественно установит и настроит ' +
              'оборудование, систему контроля и управления доступом и ' +
              'обеспечит интеграцию склада с сайтом'
          },
          info_6: {
            title: 'Открытие склада и поддержание бизнеса',
            body: 'Возьмем все управление на себя:',
            list: '&ndash; маркетинг и рекламу<br>' +
              '&ndash; службу заботы о клиентах 24/7<br>' +
              '&ndash; техническое обслуживание<br>' +
              '&ndash; управление персоналом<br>' +
              '&ndash; круглосуточное<br>&nbsp;&nbsp;&nbsp;видеонаблюдение<br>'
          }
        },
        slide_07: {
          h2: 'Комиссия&nbsp;управляющей компании',
          circle: {
            title: '24 мес.',
            note: 'срок окупаемости<br>' +
              'первоначальных<br>' +
              'инвестиций (РР)<br>'
          },
          list_1: 'валовой выручки',
          list_2: 'на управление складом',
          list_3: 'валовой выручки',
          list_4: 'на маркетинговые услуги',
          list_5: 'валовой выручки',
          list_6: 'на услуги IT'
        },
        slide_08: {
          h2: 'Кейсы',
          list_1: '<b>Площадь:</b> 165 м²',
          list_2: '<b>Расположение:</b> ул. Маршала Жукова, 76-2',
          list_3: '<b>Дата запуска проекта:</b> май 2019 г.',
          list_4: '<b>Инвестиции в переоборудование помещения:</b>' +
            '&nbsp;1&nbsp;710&nbsp;000&nbsp;руб.',
          list_5: '<b>Средняя арендная ставка:</b> 1 800 руб./м²',
          list_6: '<b>Заполняемость:</b> 99%',
          list_7: '<b>Срок окупаемости:</b> 17 месяцев'
        },
        slide_09: {
          h2: 'Остались вопросы?',
          note: 'Оставьте свои контакты и мы с вами свяжемся',
          thanks: 'Спасибо!',
          success: 'Мы получили вашу заявку',
          success_note: 'Наш менеджер свяжется с вами в течение 30 минут',
          client: 'Имя и Фамилия',
          phone: 'Мобильный телефон',
          message: 'Сообщение',
          submit: 'Отправить запрос',
          privacy_note: 'Нажимая «Отправить запрос», вы подтверждаете свое ' +
            'согласие на обработку и хранение ваших персональных данных' +
            'в соответствии с',
          privacy_link: 'политикой обработки персональных данных',
          error: '*Обязательное поле для заполения'
        },
        slide_10: {
          h2: 'Контакты',
          founder: 'Основатель',
          founder_name: 'Карпушин Михаил',
          staff: 'Руководитель отдела франчайзинга',
          staff_name: 'Никитина Наталья',
          address: '<b>Юридический адрес:</b>г. Москва, ул. Беломорская, 36'
        },
        footer: {
          about: 'О нас',
          units: 'Боксы и цены',
          delivery: 'Доставка',
          career: 'Карьера',
          partners: 'Партнёры',
          how_to: 'Как хранить вещи',
          business: 'Бизнес-хранение',
          personal: 'Личное хранение',
          contacts: 'Контакты',
          sitemap: 'Карта сайта',
          brand: 'ООО «Кладовкин»',
          copyright: 'все права защищены'
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
          h1: 'Станьте партнером Кладовкин и начните получать доход с первого дня работы склада',
          h2: 'Мы построим технологичный бизнес на основе вашего помещения и возьмем управление на себя.',
          yield: 'годовых — доходность вложений<br>в переоборудование помещения',
          button: 'Стать партнером Кладовкин',
          learn_more: 'Learn more'
        },
        slide_02: {
          h2: {
            red: 'Рынок self storage в России',
            other: 'находится на стадии активного роста'
          },
          note: {
            red: 'Self storage',
            other: '– это сдача в аренду помещений для хранения личных вещей, товаров или документов для бизнеса в индивидуальных кладовках'
          },
          block_1: {
            headline: '2 750 ₽',
            note: 'остигает арендная ставка за 1 м2 в месяц в сегменте Self storage'
          },
          block_2: {
            headline: '5-10%',
            note: 'годовой прирост площадей Self storage в Москве'
          },
          block_3: {
            headline: '95%',
            note: 'средняя наполняемость складов Self storage в Москве '
          },
          slide_1: {
            note: '"Спрос на склады в России достиг максимального уровня за 10 лет. Для развития интернет-торговли в регионах потребуется 1,5 млн кв. м складских площадей в ближайшие три года"'
          },
          slide_2: {
            note: 'Спрос на склады в России достиг максимального уровня за 10 лет. Для развития интернет-торговли в регионах потребуется 1,5 млн кв. м складских площадей в ближайшие три года"'
          },
          slide_3: {
            note: '"Спрос на склады в России достиг максимального уровня за 10 лет. Для развития интернет-торговли в регионах потребуется 1,5 млн кв. м складских площадей в ближайшие три года"'
          }
        },
        slide_03: {
          h2: {
            red: 'Кладовкин',
            other: '– единственная компания в России, обладающая тремя ключевыми компетенциями в self storage'
          },
          h2_note: 'Мы независимая компания, которая все умеет сама',
          picture_block_1: {
            headline: '4+',
            note: 'Года на рынке'
          },
          picture_block_2: {
            headline: '3 500+',
            note: 'Благодарных арендаторов'
          },
          picture_block_3: {
            headline: '10',
            note: 'Складов в Москве'
          },
          picture_block_4: {
            headline: '20 000 м²',
            note: 'Площадь складов'
          },
          block_1: {
            headline: 'Управляющая компания',
            note: 'Мы знаем, как управлять складами, чтобы они приносили прибль.'
          },
          block_2: {
            headline: 'IT компания',
            note: 'Организуем эффективный бизнес Self Storage с помощью собственных IT-технологий'
          },
          block_3: {
            headline: 'Производитель оборудования',
            note: 'С 2011 года производим поставляем оборудование для крупнейших операторов Self Storage в России'
          },
          details: 'Подробнее',
          block_note: {
            text: 'Больше информации вы можете узнать из ',
            link: 'нашей презентации'
          },
          button: 'Стать партнером Кладовкин'
        },
        slide_04: {
          headline: 'Посмотрите видео об услугах компании Кладовкин'
        },
        slide_05: {
          h2: {
            red: 'Получайте доход от переоборудования',
            other: 'помещения в склад с Кладовкин'
          },
          h2_note: 'Пример экономических и операционных показателей проекта, реализованного в отапливаемом помещении производственного или складского назначения',
          block_1: {
            headline: '165 м²',
            note: 'Площадь помещения'
          },
          block_2: {
            headline: '1 710 000 ₽',
            note: 'Стоимость переоборудования'
          },
          block_3: {
            headline: '2 мес.',
            note: 'Минимальный срок запуска проекта'
          },
          block_4: {
            headline: 'Х ХХХ ХХХ ₽',
            note: 'Выручка в месяц'
          },
          block_5: {
            headline: 'Х ХХХ ХХХ ₽',
            note: 'Прибыль в месяц'
          },
          block_6: {
            headline: '17 мес.',
            note: 'Окупаемость'
          },
          block_summary: {
            headline: {
              number: '40%',
              text: 'годовых'
            },
            note: 'доходность вложений в переоборудование помещения'
          },
          button: 'Стать партнером Кладовкин'
        },
        slide_06: {
          h2: 'Become a partner and open fully automatic turnkey business ' +
            '<span>in 2 months</span>',
          days: 'days',
          days_2: 'days',
          info_1: {
            title: 'Gathering preliminary information on potential premise',
            body: 'and calculation of techical and financial indicators for the store'
          },
          info_2: {
            title: 'Documents preparing',
            body: 'and contract concluding',
            note: {
              price: '0 RUB',
              description: 'concession fee'
            }
          },
          info_3: {
            title: 'Design-project: developing and approval',
            body: 'Gathering preliminary information on potential premise, ' +
              'calculation of techical and financial indicators for the store'
          },
          info_4: {
            title: 'Producing, delivery and installation of the equipment',
            body: 'We will produce and deliver our self storage equipment with ' +
              'quality and installation terms guarantee',
            note: {
              price: 'from 8,000 RUB/м²',
              description: 'premises outfitting'
            }
          },
          info_5: {
            title: 'Commissioning works on security system, IT-platfom integration',
            body: 'Our assembling team will install and rig up the hardware ' +
              'for access control quickly and qualitatively. They will also ' +
              'set up its integration with the website'
          },
          info_6: {
            title: 'Store grand opening and business support',
            body: 'We will take over the control of:',
            list: '&ndash; marketing and ads<br>' +
              '&ndash; clients care service 24/7<br>' +
              '&ndash; maintanance services<br>' +
              '&ndash; staff management<br>' +
              '&ndash; around the clock video surveillance<br>'
          }
        },
        slide_07: {
          h2: 'Managing company fee',
          circle: {
            title: '2 years',
            note: 'Initial investments<br>' +
              'payback period (РР)'
          },
          list_1: 'out of gross revenue',
          list_2: 'for the store management',
          list_3: 'out of gross revenue',
          list_4: 'for the marketing purposes',
          list_5: 'out of gross revenue',
          list_6: 'for IT services'
        },
        slide_08: {
          h2: 'Cases ',
          list_1: '<b>Total area:</b> 165 m²',
          list_2: '<b>Location:</b> Moscow, Marshala Zhukova st. 76-2',
          list_3: '<b>Project start date:</b> May 2019',
          list_4: '<b>Premise outfitting investments:</b> 1,710,000&nbsp;RUB',
          list_5: '<b>Average rent price:</b> 1,800&nbsp;RUB/m²',
          list_6: '<b>Occupancy:</b> 99%',
          list_7: '<b>Recoupment period:</b> 17 months'
        },
        slide_09: {
          h2: 'Still have questions?',
          note: 'Fill in your details and we will contact you shortly',
          thanks: 'Thank you!',
          success: 'Your request has been received',
          success_note: 'Our designated specialist will get in contact with you within 30 minutes',
          client: 'Name and Surname',
          phone: 'Phone number',
          message: 'Message',
          submit: 'Send the request',
          privacy_note: 'By clicking “Send the request” button you are providing ' +
            'your consent for processing and further storage of your personal data ' +
            'in accordance with personal data processing',
          privacy_link: 'policy',
          error: '*This field is required'
        },
        slide_10: {
          h2: 'Contacts',
          founder: 'Founder and CEO',
          founder_name: 'Mikhail Karpushin',
          staff: 'Chief of franchising department',
          staff_name: 'Natalia Nikitina',
          address: '<b>Address:</b> Moscow, Belomorskaya st. 36'
        },
        footer: {
          about: 'About us',
          units: 'Units and prices',
          delivery: 'Delivery',
          career: 'Career',
          partners: 'Partners',
          how_to: 'How to store stuff',
          business: 'Storage for business',
          personal: 'Storage for life',
          contacts: 'Contacts',
          sitemap: 'Site map',
          brand: 'LLC Kladovkin',
          copyright: 'all rights reserved'
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
