import { useState } from 'react'
import { Plus, ArrowRight } from 'lucide-react'
import { useInView } from '../../hooks/useInView'

const faqs = [
  {
    q: 'Это как ChatGPT?',
    a: 'ChatGPT — это чат-бот. Nemo Agent — это персональный ассистент. Разница: Nemo помнит контекст, понимает голос и фото, может действовать (ставить напоминания, вести CRM, бронировать), работает в Telegram — там, где ты уже проводишь 80% времени.',
  },
  {
    q: 'Какие модели ИИ используются?',
    a: 'Мы используем Model Government — роутер, который выбирает лучшую модель под задачу. Для рутины (напоминания, простые вопросы) — дешёвые модели. Для сложных задач (анализ, креатив) — топовые. Это позволяет держать цену в 10× ниже, чем у конкурентов с одной моделью.',
  },
  {
    q: 'А мои данные в безопасности?',
    a: 'Все разговоры зашифрованы (AES-256). Мы не продаём данные. OpenRouter + Anthropic-совместимые API для обработки. Локализация — РФ. Соответствие 152-ФЗ.',
  },
  {
    q: 'Можно ли отменить подписку?',
    a: 'Да, в любой момент. Без штрафов, без обязательств. Просто отмени в Telegram-боте — и через 30 дней списаний не будет.',
  },
  {
    q: 'Подходит ли для команд?',
    a: 'Premium-тариф включает white-label и shared контекст. Скоро — Nemo Teams с ролями и shared workspace.',
  },
  {
    q: 'Что насчёт интеграций?',
    a: 'Из коробки: Google Calendar, Notion, Trello, GitHub, Telegram-каналы. Через API в Premium-тарифе — любые интеграции.',
  },
  {
    q: 'Как попробовать бесплатно?',
    a: 'Открой @nemo_agent_bot в Telegram и нажми Start. 20 сообщений/день бесплатно, навсегда. Без регистрации.',
  },
  {
    q: 'Есть ли B2B-версия?',
    a: 'Да — Nemo Enterprise для компаний 50+ сотрудников. Compliance (152-ФЗ, GDPR), self-hosted, SLA 99.9%, выделенный менеджер. Свяжитесь: enterprise@nemo-agent.ru',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const { ref, inView } = useInView()

  return (
    <section id="faq" className="section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container-x max-w-4xl">
        <div className={`text-center mb-12 ${inView ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <p className="text-sm font-semibold text-ios-blue uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="heading-2">
            Частые <span className="gradient-text">вопросы</span>
          </h2>
        </div>

        <div className={`${inView ? 'fade-in visible' : 'fade-in'}`}>
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <Plus className="w-5 h-5 faq-icon" strokeWidth={2.5} />
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="body mb-4">Не нашли ответ?</p>
          <a
            href="mailto:hello@nemo-agent.ru"
            className="glass-btn glass-btn-secondary inline-flex"
          >
            Написать в поддержку
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
