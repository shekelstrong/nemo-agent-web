import { useInView } from '../../hooks/useInView'

const testimonials = [
  {
    name: 'Алексей М.',
    role: 'Фрилансер-дизайнер',
    avatar: 'А',
    quote: 'Я скептически относился к "ИИ-ассистентам в Telegram", но Nemo реально помнит контекст. Я могу через неделю спросить "что мы обсуждали с клиентом X?" — и она отвечает. Это не ChatGPT, который через минуту забывает.',
  },
  {
    name: 'Мария К.',
    role: 'Предприниматель, e-commerce',
    avatar: 'М',
    quote: 'Голосовые — killer feature. Я в дороге, диктую задачи — Nemo их записывает, сортирует, напоминает. В 10× экономит время моего ассистента.',
  },
  {
    name: 'Дмитрий П.',
    role: 'Основатель SaaS-стартапа',
    avatar: 'Д',
    quote: 'У меня жена — СММ-менеджер. Nemo за неё публикует 5 постов в день, отвечает на комментарии в Telegram-канале, собирает аналитику. Стоит 990₽/мес. Раньше платили 30 000₽/мес человеку.',
  },
  {
    name: 'Анна Р.',
    role: 'Студентка-старшекурсница',
    avatar: 'А',
    quote: 'Скинула фото задачи по матану — Nemo пошагово решила, объяснила 3 способами. Как репетитор за 2000₽/час, только бесплатно.',
  },
  {
    name: 'Сергей В.',
    role: 'Маркетолог, B2B',
    avatar: 'С',
    quote: 'Попросил Nemo проанализировать наших конкурентов. Через 5 минут прислал PDF с таблицей, ценами, УТП каждого. Я бы это делал полдня.',
  },
  {
    name: 'Ольга Т.',
    role: 'Мама в декрете',
    avatar: 'О',
    quote: 'Сфоткала справку → Nemo перевела её в Google Sheets. Сфоткала визитку врача → сохранила контакт. Сфоткала рецепт → напомнила купить лекарства. Это как живая секретарша.',
  },
]

export default function Testimonials() {
  const { ref, inView } = useInView()

  return (
    <section className="section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container-x">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <p className="text-sm font-semibold text-ios-blue uppercase tracking-widest mb-3">Отзывы</p>
          <h2 className="heading-2 mb-6">
            Что говорят <span className="gradient-text">12 500+ пользователей</span>
          </h2>
        </div>

        <div className={`grid-cols-3-md stagger ${inView ? 'visible' : ''}`}>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card hover-lift">
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.avatar}</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
