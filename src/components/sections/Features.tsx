import { features } from '../../data/features'
import { useInView } from '../../hooks/useInView'

export default function Features() {
  const { ref, inView } = useInView()

  return (
    <section id="features" className="section aurora-bg" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container-x relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <p className="text-sm font-semibold text-ios-blue uppercase tracking-widest mb-3">Возможности</p>
          <h2 className="heading-2 mb-6">
            Не очередной чат-бот. <span className="gradient-text">Личный ИИ-ассистент.</span>
          </h2>
          <p className="body-lg">
            Всё, что вы любили в ChatGPT — но в Telegram, с памятью, голосом, и действиями 24/7.
          </p>
        </div>

        <div className={`grid-cols-3-md stagger ${inView ? 'visible' : ''}`}>
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card hover-lift"
              style={{
                '--card-glow': `${feature.color}20`,
                '--icon-bg': `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                '--icon-border': `${feature.color}50`,
                '--icon-color': feature.color,
              } as React.CSSProperties}
            >
              <div className="feature-icon">
                <feature.icon className="w-7 h-7" strokeWidth={2} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
