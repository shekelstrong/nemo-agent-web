import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, BookOpen, Share2 } from 'lucide-react'
import { useEffect } from 'react'
import { articles } from '../data/articles'

export default function Article() {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find(a => a.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [slug])

  if (!article) {
    return (
      <div className="pt-32 pb-16 container-x text-center">
        <h1 className="heading-2 mb-4">Статья не найдена</h1>
        <Link to="/articles" className="glass-btn glass-btn-primary inline-flex">
          <ArrowLeft className="w-4 h-4" />
          К списку статей
        </Link>
      </div>
    )
  }

  // Find related articles
  const related = articles
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3)

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="container-x max-w-4xl">
        <Link to="/articles" className="inline-flex items-center gap-2 text-sm text-ios-blue hover:gap-3 transition-all mb-8">
          <ArrowLeft className="w-4 h-4" />
          Назад к статьям
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-ios-blue/15 border border-ios-blue/30 text-xs font-bold uppercase tracking-wider text-ios-blue">
              {article.category}
            </span>
            <span className="text-sm text-white/40 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="text-sm text-white/40 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTime} мин
            </span>
          </div>

          <h1 className="heading-1 mb-6">{article.title}</h1>
          <p className="body-lg">{article.excerpt}</p>
        </div>

        {/* Content */}
        <article
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Share */}
        <div className="container-x max-w-4xl mt-16 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="text-sm text-white/50">Полезная статья? Поделитесь:</div>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: article.title, url: window.location.href })
                } else {
                  navigator.clipboard.writeText(window.location.href)
                  alert('Ссылка скопирована!')
                }
              }}
              className="glass-btn glass-btn-secondary text-sm"
            >
              <Share2 className="w-4 h-4" />
              Поделиться
            </button>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="container-x max-w-5xl mt-24">
          <h2 className="heading-3 mb-8 flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-ios-blue" />
            Похожие статьи
          </h2>
          <div className="grid-cols-3-md">
            {related.map(a => (
              <Link
                key={a.slug}
                to={`/articles/${a.slug}`}
                className="feature-card hover-lift group"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-ios-blue mb-2 inline-block">
                  {a.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ios-blue transition-colors line-clamp-2">
                  {a.title}
                </h3>
                <p className="text-sm text-white/50 line-clamp-2">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
