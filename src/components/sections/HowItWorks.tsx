import { ArrowRight, Sparkles, Zap, Brain, Mic } from 'lucide-react'
import { useInView } from '../../hooks/useInView'

const steps = [
  {
    icon: Sparkles,
    title: '1. Открой @nemo_agent_bot',
    description: 'Без регистрации, без email. Просто нажми Start в Telegram.',
    color: '#0A84FF',
  },
  {
    icon: Brain,
    title: '2. Расскажи о себе',
    description: 'Чем занимаешься, какие задачи, что хочешь автоматизировать. 2-3 минуты.',
    color: '#AF52DE',
  },
  {
    icon: Mic,
    title: '3. Используй как ассистента',
    description: 'Голосом, текстом, фото. 24/7. Он уже знает твой контекст и растёт вместе с тобой.',
    color: '#34C759',
  },
]

export default function HowItWorks() {
  const { ref, inView } = useInView()

  return (
    <section id="how" className="section aurora-bg" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container-x relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <p className="text-sm font-semibold text-ios-blue uppercase tracking-widest mb-3">Как работает</p>
          <h2 className="heading-2 mb-6">
            3 шага до <span className="gradient-text">личного ассистента</span>
          </h2>
        </div>

        <div className={`grid-cols-3-md stagger ${inView ? 'visible' : ''}`}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="feature-card hover-lift"
              style={{
                '--card-glow': `${step.color}20`,
                '--icon-bg': `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                '--icon-border': `${step.color}50`,
                '--icon-color': step.color,
              } as React.CSSProperties}
            >
              <div className="feature-icon">
                <step.icon className="w-7 h-7" strokeWidth={2} />
              </div>
              <h3 className="feature-title">{step.title}</h3>
              <p className="feature-description">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://t.me/nemo_agent_bot"
            target="_blank"
            rel="noreferrer"
            className="glass-btn glass-btn-primary inline-flex"
          >
            <Zap className="w-5 h-5" />
            Попробовать сейчас
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
