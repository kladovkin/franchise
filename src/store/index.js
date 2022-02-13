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
          blocks: [{
            headline: '2 750 ₽',
            note: 'достигает арендная ставка за 1 м2 в месяц в сегменте Self storage'
          }, {
            headline: '5-10%',
            note: 'годовой прирост площадей Self storage в Москве'
          }, {
            headline: '95%',
            note: 'средняя наполняемость складов Self storage в Москве '
          }],
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
          h2: {
            red: 'комфортное и эффективное управление бизнесом',
            other: 'Взимаем фиксированную комиссию, чтобы обеспечить'
          },
          income: {
            headline: 'Ваш доход',
            note: 'От вас нужно только помещение и инвестиции для оборудования склада'
          },
          commission: {
            headline: 'Комиссия',
            note: 'Размер комиссии варьируется в пределах 15-20% и зависит от площади вашего помещения'
          },
          mobile_label: 'В нашу комиссию входит:',
          blocks: [{
            headline: 'Управление сетью Кладовкин',
            texts: [
              'прием звонков от потенциальных клиентов',
              'заключение договоров',
              'проведение и прием оплат',
              'поддержка текущих клиентов',
              'работа с должниками',
              'ведение финансовой отчетности (выручка, сданные кв метры, закрытые договоры, расходы, уровень заполненности склада)'
            ]
          }, {
            headline: 'ИТ-инфраструктура',
            texts: [
              'сайт и мобильное приложение',
              'личный кабинет для партенеров и арендаторов',
              'охранная система',
              'прием платежей',
              'работа с ошибками клиентов и администраторов'
            ]
          }, {
            headline: 'Маркетинг',
            texts: [
              'SEO',
              'PPC',
              'SMM',
              'продвижение на картах'
            ]
          }],
          comparison: {
            headline: 'Сравните разные платформы и&nbsp;их&nbsp;комиссии',
            blocks: [{
              label: 'Квартиры',
              value: '14-20%'
            }, {
              label: 'Автомобили',
              value: '18-24%'
            }, {
              label: 'Помещения',
              value: '15-20%'
            }]
          }
        },
        slide_07: {
          h2: 'Вы собственник помещения?',
          columns: [{
            headline: 'У нас есть требования к помещению, которым должны соответствовать все наши парнеры.',
            lines: [
              'От 100 м2 в вашей собственности',
              'Система отопления в помещении',
              'Электроснабжение с мощностью от Х кВт',
              'Соблюдение правил пожарной безопасности',
              'Устойчивый интернет на территории помещения',
              'Парковка перед входом в помещение'
            ]
          }, {
            headline: 'Дополнительным преимушеством для ваших будущих арендаторов будет:',
            lines: [
              'Расположение в впервой линии домов вблизи от дороги',
              'Большая высота потолков  в помещении',
              'Расположение вблизи жилой застройки',
              'Наличие рядом точек притяжения (магазины, МФЦ, др.)',
              'Широкий дверной проем',
              'Доступ в помещение 24/7'
            ]
          }],
          button: 'Я готов стать партнером Кладовкин'
        },
        slide_08: {
          h2: 'Откройте технологичный бизнес' +
            '<br><span>в сфере недвижимости за 2 месяца</span>',
          blocks: [{
            headline: 'Консультация, сбор предварительной информации о партнере и помещении',
            days: '2 дня'
          }, {
            headline: 'Технико-экономическое обоснование&nbsp;проекта склада',
            note: 'Разработаем дизайн-проект, составим смету на оборудование, подготовим финансовую модель',
            days: '7 дней',
            price: 'от 50 000 до 100 000 руб.'
          }, {
            headline: 'Подготовка документов и&nbsp;заключение&nbsp;договора франшизы',
            days: '2 дня',
            price: '0 рублей',
            price_note: 'концессионный взнос'
          }, {
            headline: 'Изготовление и поставка оборудования',
            note: 'Изготовим и произведем поставку оборудования собственной разработки с&nbsp;гарантией качества и сроков',
            days: '30 дней',
            price: '10 000 руб./м²',
            price_note: 'переоборудование помещения'
          }, {
            headline: 'Пуско-наладочные работы охранной системы, интеграция с IT-платформой',
            note: 'Сервисная служба установит оборудование, систему контроля и управления доступом, обеспечит интеграцию склада с сайтом',
            days: '20 дней'
          }, {
            headline: 'Открытие склада,<br>начало&nbsp;продаж'
          }]
        },
        slide_09: {
          circle: {
            title: '40%',
            subtitle: 'годовых'
          },
          headline: 'доходность вложений в&nbsp;переоборудование помещения',
          button: 'Стать партнером Кладовкин'
        },
        slide_10: {
          h2: 'Склады наших партнеров'
        },
        slide_11: {
          h2: 'Остались вопросы?',
          faqs: [{
            q: 'Какие требования к помещению партнера выдвигает Кладовкин',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Какая должна быть высота потолков в помещении?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Возможно ли в рамках партнерства открыть склад в другом городе?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Может ли партнер устанавливать цены на боксы в своем складском комплексе?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Какая средняя стоимость аренды бокса в регионах?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Взимает ли Кладовкин паушальный взнос?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Какой процент от выручки склада взимает Кладовкин в качестве комиссии?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Какой средний срок окупаемости вложений в переоборудование?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Может ли партнер оборудовать помещение своими силами, а управление складским комплексом передать сети Кладовкин?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Что входит ежемесячные затраты со стороны партнера?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Сколько составляет средний темп заполняемости складского центра?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }]
        },
        slide_12: {
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
        slide_13: {
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
          blocks: [{
            headline: '2 750 ₽',
            note: 'достигает арендная ставка за 1 м2 в месяц в сегменте Self storage'
          }, {
            headline: '5-10%',
            note: 'годовой прирост площадей Self storage в Москве'
          }, {
            headline: '95%',
            note: 'средняя наполняемость складов Self storage в Москве '
          }],
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
          h2: {
            red: 'комфортное и эффективное управление бизнесом',
            other: 'Взимаем фиксированную комиссию, чтобы обеспечить'
          },
          income: {
            headline: 'Ваш доход',
            note: 'От вас нужно только помещение и инвестиции для оборудования склада'
          },
          commission: {
            headline: 'Комиссия',
            note: 'Размер комиссии варьируется в пределах 15-20% и зависит от площади вашего помещения'
          },
          mobile_label: 'В нашу комиссию входит:',
          blocks: [{
            headline: 'Управление сетью Кладовкин',
            texts: [
              'прием звонков от потенциальных клиентов',
              'заключение договоров',
              'проведение и прием оплат',
              'поддержка текущих клиентов',
              'работа с должниками',
              'ведение финансовой отчетности (выручка, сданные кв метры, закрытые договоры, расходы, уровень заполненности склада)'
            ]
          }, {
            headline: 'ИТ-инфраструктура',
            texts: [
              'сайт и мобильное приложение',
              'личный кабинет для партенеров и арендаторов',
              'охранная система',
              'прием платежей',
              'работа с ошибками клиентов и администраторов'
            ]
          }, {
            headline: 'Маркетинг',
            texts: [
              'SEO',
              'PPC',
              'SMM',
              'продвижение на картах'
            ]
          }],
          comparison: {
            headline: 'Сравните разные платформы и&nbsp;их&nbsp;комиссии',
            blocks: [{
              text: 'Квартиры',
              value: '14-20%'
            }, {
              text: 'Автомобили',
              value: '18-24%'
            }, {
              text: 'Помещения',
              value: '15-20%'
            }]
          }
        },
        slide_07: {
          h2: 'Вы собственник помещения?',
          columns: [{
            headline: 'У нас есть требования к помещению, которым должны соответствовать все наши парнеры.',
            lines: [
              'От 100 м2 в вашей собственности',
              'Система отопления в помещении',
              'Электроснабжение с мощностью от Х кВт',
              'Соблюдение правил пожарной безопасности',
              'Устойчивый интернет на территории помещения',
              'Парковка перед входом в помещение'
            ]
          }, {
            headline: 'Дополнительным преимушеством для ваших будущих арендаторов будет:',
            lines: [
              'Расположение в впервой линии домов вблизи от дороги',
              'Большая высота потолков  в помещении',
              'Расположение вблизи жилой застройки',
              'Наличие рядом точек притяжения (магазины, МФЦ, др.)',
              'Широкий дверной проем',
              'Доступ в помещение 24/7'
            ]
          }],
          button: 'Я готов стать партнером Кладовкин'
        },
        slide_08: {
          h2: 'Откройте технологичный бизнес' +
            '<br><span>в сфере недвижимости за 2 месяца</span>',
          blocks: [{
            headline: 'Консультация, сбор предварительной информации о партнере и помещении',
            days: '2 дня'
          }, {
            headline: 'Технико-экономическое обоснование&nbsp;проекта склада',
            note: 'Разработаем дизайн-проект, составим смету на оборудование, подготовим финансовую модель',
            days: '7 дней',
            price: 'от 50 000 до 100 000 руб.'
          }, {
            headline: 'Подготовка документов и&nbsp;заключение&nbsp;договора франшизы',
            days: '2 дня',
            price: '0 рублей',
            price_note: 'концессионный взнос'
          }, {
            headline: 'Изготовление и поставка оборудования',
            note: 'Изготовим и произведем поставку оборудования собственной разработки с&nbsp;гарантией качества и сроков',
            days: '30 дней',
            price: '10 000 руб./м²',
            price_note: 'переоборудование помещения'
          }, {
            headline: 'Пуско-наладочные работы охранной системы, интеграция с IT-платформой',
            note: 'Сервисная служба установит оборудование, систему контроля и управления доступом, обеспечит интеграцию склада с сайтом',
            days: '20 дней'
          }, {
            headline: 'Открытие склада,<br>начало&nbsp;продаж'
          }]
        },
        slide_09: {
          circle: {
            title: '40%',
            subtitle: 'годовых'
          },
          headline: 'доходность вложений в&nbsp;переоборудование помещения',
          button: 'Стать партнером Кладовкин'
        },
        slide_10: {
          h2: 'Склады наших партнеров'
        },
        slide_11: {
          h2: 'Остались вопросы?',
          faqs: [{
            q: 'Какие требования к помещению партнера выдвигает Кладовкин',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Какая должна быть высота потолков в помещении?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Возможно ли в рамках партнерства открыть склад в другом городе?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Может ли партнер устанавливать цены на боксы в своем складском комплексе?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Какая средняя стоимость аренды бокса в регионах?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Взимает ли Кладовкин паушальный взнос?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Какой процент от выручки склада взимает Кладовкин в качестве комиссии?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Какой средний срок окупаемости вложений в переоборудование?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Может ли партнер оборудовать помещение своими силами, а управление складским комплексом передать сети Кладовкин?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Что входит ежемесячные затраты со стороны партнера?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            q: 'Сколько составляет средний темп заполняемости складского центра?',
            a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }]
        },
        slide_12: {
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
        slide_13: {
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
  }
});
