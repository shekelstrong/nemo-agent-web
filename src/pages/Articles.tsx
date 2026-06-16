import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { articles } from '../data/articles'

export default function Articles() {
  const { ref, inView } = useInView()

  return (
    <div className="pt-32 pb-16">
      <section className="container-x" ref={ref as React.RefObject<HTMLElement>}>
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <p className="text-sm font-semibold text-ios-blue uppercase tracking-widest mb-3">База знаний</p>
          <h1 className="heading-1 mb-6">
            Статьи про <span className="gradient-text">ИИ-агентов</span> и автоматизацию
          </h1>
          <p className="body-lg">
            Экспертный контент для предпринимателей, фрилансеров и тех, кто хочет внедрить ИИ в свой бизнес.
            SEO-оптимизированные статьи по высоко-, средне- и низкочастотным запросам.
          </p>
        </div>

        <div className={`grid-cols-2-md stagger ${inView ? 'visible' : ''}`}>
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              to={`/articles/${article.slug}`}
              className="feature-card hover-lift group block"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-ios-blue">
                  {article.category}
                </span>
                <span className="text-xs text-white/30">·</span>
                <span className="text-xs text-white/40">{article.readingTime} мин чтения</span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-ios-blue transition-colors">
                {article.title}
              </h2>

              <p className="text-base text-white/60 mb-6 line-clamp-3">{article.excerpt}</p>

              <div className="flex items-center justify-between text-sm text-white/40">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-2 text-ios-blue font-semibold group-hover:gap-3 transition-all">
                  Читать
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
