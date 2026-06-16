import { useInView } from '../../hooks/useInView'

const useCases = [
  {
    industry: 'Фрилансеры',
    examples: [
      'Учёт доходов/расходов по фото чеков',
      'Авто-напоминания о дедлайнах клиентов',
      'Генерация КП за 30 секунд',
      'Сводка дня голосовым сообщением',
    ],
  },
  {
    industry: 'Предприниматели',
    examples: [
      'Анализ конкурентов одной командой',
      'CRM в Telegram: заявки, сделки, задачи',
      'Автоответы клиентам на типовые вопросы',
      'Отчёты по продажам каждое утро',
    ],
  },
  {
    industry: 'E-commerce',
    examples: [
      'Генерация карточек WB/Ozon по фото товара',
      'SEO-оптимизация описаний под Яндекс',
      'Ответы на отзывы покупателей',
      'Аналитика продаж по запросу',
    ],
  },
  {
    industry: 'Студенты',
    examples: [
      'Решение задач по фото с пошаговым разбором',
      'Подготовка к ЕГЭ/ОГЭ по темам',
      'Перевод текстов и статей',
      'Саммари лекций из голосовых',
    ],
  },
]

export default function UseCases() {
  const { ref, inView } = useInView()

  return (
    <section className="section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container-x">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <p className="text-sm font-semibold text-ios-blue uppercase tracking-widest mb-3">Применение</p>
          <h2 className="heading-2 mb-6">
            Для <span className="gradient-text">кого</span> Nemo Agent
          </h2>
        </div>

        <div className={`grid-cols-2-md stagger ${inView ? 'visible' : ''}`}>
          {useCases.map((uc, i) => (
            <div key={i} className="feature-card">
              <h3 className="text-2xl font-bold text-white mb-4">{uc.industry}</h3>
              <ul className="space-y-3">
                {uc.examples.map((e, j) => (
                  <li key={j} className="flex items-start gap-3 text-base text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-ios-blue flex-shrink-0 mt-2.5" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
