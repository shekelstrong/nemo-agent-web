/**
 * Стандартный набор брендов для Buildo экосистемы.
 * Логотипы кладутся в /public/clients/ соответствующего репо.
 *
 * Источник: skill brand-icons (https://iconsclub.vercel.app/, simpleicons.org)
 */

export interface BrandLogo {
  name: string
  file: string
  url?: string
}

// Российские бренды (high priority)
export const RU_BRANDS: BrandLogo[] = [
  { name: 'Wildberries', file: 'wildberries.svg' },
  { name: 'Avito', file: 'avito.svg' },
  { name: 'Ozon', file: 'ozon.svg' },
  { name: 'Yandex', file: 'yandex.svg' },
  { name: 'Telegram', file: 'telegram.svg' },
  { name: 'VK', file: 'vk.svg' },
  { name: 'Kaspersky', file: 'kaspersky.svg' },
  { name: 'Ozon Банк', file: 'ozon-bank.svg' },
  { name: 'T-Bank', file: 'tbank.svg' },
  { name: 'Sber', file: 'sber.svg' },
  { name: 'Alpha', file: 'alpha.svg' },
  { name: 'ЦИАН', file: 'cian.svg' },
  { name: 'hh.ru', file: 'hh.svg' },
  { name: 'Skyeng', file: 'skyeng.svg' },
  { name: 'Ostrovok', file: 'ostrovok.svg' },
  { name: '1С', file: '1c.svg' },
  { name: 'Аэрофлот', file: 'aeroflot.svg' },
]

// Технологические бренды (для B2B/SaaS)
export const TECH_BRANDS: BrandLogo[] = [
  { name: 'Telegram', file: 'telegram.svg' },
  { name: 'GitHub', file: 'github.svg' },
  { name: 'Notion', file: 'notion.svg' },
  { name: 'Figma', file: 'figma.svg' },
  { name: 'Slack', file: 'slack.svg' },
  { name: 'OpenAI', file: 'openai.svg' },
  { name: 'Anthropic', file: 'anthropic.svg' },
  { name: 'Yandex Cloud', file: 'yandex-cloud.svg' },
  { name: 'VK Cloud', file: 'vk-cloud.svg' },
]

// Travel бренды (для Buildo Travel)
export const TRAVEL_BRANDS: BrandLogo[] = [
  { name: 'Аэрофлот', file: 'aeroflot.svg' },
  { name: 'Ostrovok', file: 'ostrovok.svg' },
  { name: 'Яндекс Путешествия', file: 'yandex-travel.svg' },
  { name: 'РЖД', file: 'rzd.svg' },
  { name: 'Aviasales', file: 'aviasales.svg' },
  { name: 'Tutu.ru', file: 'tutu.svg' },
]

// Estate бренды (для Buildo Estate)
export const ESTATE_BRANDS: BrandLogo[] = [
  { name: 'ЦИАН', file: 'cian.svg' },
  { name: 'Авито Недвижимость', file: 'avito.svg' },
  { name: 'Яндекс Недвижимость', file: 'yandex-realty.svg' },
  { name: 'ДомКлик', file: 'domclick.svg' },
  { name: 'Самолёт', file: 'samolet.svg' },
  { name: 'ПИК', file: 'pik.svg' },
]

// CRM бренды (для Buildo CRM, B2B)
export const CRM_BRANDS: BrandLogo[] = [
  ...RU_BRANDS.slice(0, 8), // top-8 RU брендов
  { name: 'Bitrix24', file: 'bitrix24.svg' },
  { name: 'amoCRM', file: 'amocrm.svg' },
  { name: 'МегаCRM', file: 'megacrm.svg' },
]

// Resume бренды (для Buildo Resume, HR-tech)
export const RESUME_BRANDS: BrandLogo[] = [
  { name: 'hh.ru', file: 'hh.svg' },
  { name: 'SuperJob', file: 'superjob.svg' },
  { name: 'LinkedIn', file: 'linkedin.svg' },
  { name: 'Хабр Карьера', file: 'habr-career.svg' },
  { name: 'Работа.ру', file: 'rabota.svg' },
  { name: 'Яндекс Практикум', file: 'yandex-practicum.svg' },
]
