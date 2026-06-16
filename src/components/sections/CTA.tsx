import { ArrowRight, Sparkles } from 'lucide-react'
import { useInView } from '../../hooks/useInView'

export default function CTA() {
  const { ref, inView } = useInView()

  return (
    <section className="section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container-x">
        <div className={`cta-section ${inView ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <Sparkles className="w-12 h-12 text-ios-blue mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="heading-2 mb-6 relative z-10">
            Готов <span className="gradient-text-aurora">попробовать</span>?
          </h2>
          <p className="body-lg mb-8 relative z-10 max-w-2xl mx-auto">
            20 сообщений в день бесплатно. Навсегда. Без регистрации. Открой Telegram, нажми Start — и у тебя личный ИИ-ассистент.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <a
              href="https://t.me/nemo_agent_bot"
              target="_blank"
              rel="noreferrer"
              className="glass-btn glass-btn-primary text-base py-4 px-8"
            >
              <Sparkles className="w-5 h-5" />
              Открыть в Telegram
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/articles"
              className="glass-btn glass-btn-secondary text-base py-4 px-8"
            >
              Читать блог
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
