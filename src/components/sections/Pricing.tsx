import { Check, Sparkles } from 'lucide-react'
import { useInView } from '../../hooks/useInView'

const tiers = [
  {
    name: 'Plus',
    description: 'Для тех, кто хочет попробовать',
    price: 290,
    period: '₽/мес',
    features: [
      'Безлимит текстовых сообщений',
      'Голосовые сообщения (вход)',
      'Память на 7 дней',
      'Базовые действия',
      '5 чатов контекста',
    ],
    cta: 'Начать бесплатно',
    recommended: false,
  },
  {
    name: 'Pro',
    description: 'Для фрилансеров и предпринимателей',
    price: 990,
    period: '₽/мес',
    features: [
      'Всё из Plus',
      'Голосовые ответы (выход)',
      'Память на 90 дней',
      'Анализ фото и документов',
      'Действия: календарь, почта, CRM',
      'Безлимит чатов',
      'Приоритетная поддержка',
    ],
    cta: 'Выбрать Pro',
    recommended: true,
  },
  {
    name: 'Premium',
    description: 'Для команд и агентств',
    price: 1990,
    period: '₽/мес',
    features: [
      'Всё из Pro',
      'Память без ограничений',
      'AI-аватар с твоим лицом',
      'White-label в твоём бренде',
      'API для интеграций',
      'Аналитика и отчёты',
      'Выделенный менеджер',
    ],
    cta: 'Связаться',
    recommended: false,
  },
]

export default function Pricing() {
  const { ref, inView } = useInView()

  return (
    <section id="pricing" className="section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container-x">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <p className="text-sm font-semibold text-ios-blue uppercase tracking-widest mb-3">Тарифы</p>
          <h2 className="heading-2 mb-6">
            <span className="gradient-text">Простые цены.</span> Без подвохов.
          </h2>
          <p className="body-lg">
            Без скрытых платежей, без привязки к тарифу оператора. Отмени в любой момент.
          </p>
        </div>

        <div className={`grid-cols-3-md stagger ${inView ? 'visible' : ''}`} style={{ alignItems: 'stretch' }}>
          {tiers.map((tier, i) => (
            <div key={i} className={`pricing-card ${tier.recommended ? 'recommended' : ''}`}>
              <div className="pricing-tier-name">{tier.name}</div>
              <div className="pricing-tier-description">{tier.description}</div>

              <div className="pricing-price">
                <span className="pricing-price-amount">{tier.price.toLocaleString('ru-RU')}</span>
                <span className="pricing-price-period">{tier.period}</span>
              </div>

              <ul className="pricing-features">
                {tier.features.map((f, j) => (
                  <li key={j} className="pricing-feature">
                    <span className="pricing-feature-icon">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://t.me/nemo_agent_bot"
                target="_blank"
                rel="noreferrer"
                className={`glass-btn w-full ${tier.recommended ? 'glass-btn-primary' : 'glass-btn-secondary'}`}
              >
                {tier.recommended && <Sparkles className="w-4 h-4" />}
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-white/40 mt-12">
          Все цены указаны в рублях. Без НДС. Без скрытых платежей.
        </p>
      </div>
    </section>
  )
}
