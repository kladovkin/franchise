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
          switcher: {
            owner: 'Владельцам',
            tenant: 'Арендаторам'
          },
          owner: {
            h2: 'Организуем эффективный бизнес Self Storage с помощью IT-технологий',
            note: 'Полная автоматизация бизнес-процессов для собственника',
            list_1: {
              title: 'Автоматизированные процессы управления',
              body: 'Склад может полноценно функционировать без постоянного ' +
                'присутствия персонала: охраны, менеджеров и администраторов'
            },
            list_2: {
              title: 'Личный кабинет собственника',
              body: 'С доступом к ежедневным аналитическим отчетам ' +
                '(количество клиентов, количество арендованных м², выручка и&nbsp;др.) ' +
                'и ключевым показателям эффективности (<span>OBITDA</span>, ' +
                '<span>IRR</span> и др.)'
            },
            list_3: {
              title: 'Личный кабинет сотрудника',
              body: 'С системой функциональных обязанностей ' +
                'и должностных инструкций, способной подсказать сотруднику ' +
                'его следующий шаг'
            },
            list_4: {
              title: 'Сквозная веб-аналитика'
            }
          },
          tenant: {
            h2: '<span>Кладовкин</span> &mdash; технологический лидер ' +
              'российского рынка Self Storage',
            note: 'Лучший клиентский опыт для арендатора',
            list_1: 'Поиск ближайшего склада на карте',
            list_2: 'Выбор бокса нужного размера',
            list_3: 'Заключение и расторжение договора аренды онлайн',
            list_4: 'Оплата счета наиболее удобным&nbsp;способом',
            list_5: 'Доступ к складу и парковке по приложению или пин-коду',
            list_6: 'Отслеживание баланса и&nbsp;контроль&nbsp;задолженности',
            list_7: 'Вызов грузового такси при необходимости'
          }
        },
        slide_05: {
          h2: 'Мы работаем с юридическими лицами и ИП &mdash; собственниками ' +
            'помещений от 100 м²',
          list_1: 'Отдельно стоящее<br>складское помещение',
          list_2: 'Складское помещение<br>в жилом доме',
          list_3: 'Здания<br>бывших АТС',
          list_4: 'Подвальные<br>помещения',
          list_5: 'Подземный паркинг<br>торгового центра',
          list_6: 'Другие<br>помещения',
          button: 'Узнать больше'
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
          switcher: {
            owner: 'For owners',
            tenant: 'For tenants'
          },
          owner: {
            h2: 'Establishing highly efficient business with helping hand of IT-technologies ',
            note: 'Complete automatization of business processes for a partner',
            list_1: {
              title: 'Automated management routines',
              body: 'Your store can function without constant staff presence: ' +
                'no managers, administrators and security needed.'
            },
            list_2: {
              title: 'Partner’s personal account',
              body: 'It provides access to various daily reports and other key ' +
                'performance indicators like OBITDA, IRR and so on.'
            },
            list_3: {
              title: 'Employee’s personal account',
              body: 'With functional duty and instruction system, ' +
                'that is capable to advise a next step to an employee'
            },
            list_4: {
              title: 'End-to-end web analytics'
            }
          },
          tenant: {
            h2: '<span>Kladovkin</span> &mdash; technological leader ' +
              'of Russian Self Storage market',
            note: 'The best client-side expirience for a tenant',
            list_1: 'Search for the nearest storage site on the map',
            list_2: 'Choose the box size you need',
            list_3: 'Conclude and terminate your rental contract online',
            list_4: 'Pay for storage the way you like it',
            list_5: 'Access your box and parking space through the App or a pin-code',
            list_6: 'Monitor your account balance and control indebtedness',
            list_7: 'Call a cargo taxi if needed'
          }
        },
        slide_05: {
          h2: 'We work with legal entities and individual entrepreneurs who ' +
            'are the own or rent premises of 100 m² and more',
          list_1: 'Dedicated warehouse premises',
          list_2: 'Storage and commercial areas in<br>living blocks',
          list_3: 'Ex-PBX<br>buildings',
          list_4: 'Basement<br>floors',
          list_5: 'Underground or<br>mall parkings',
          list_6: 'Other premises',
          button: 'Learn more'
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
