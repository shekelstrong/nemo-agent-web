import { useState } from 'react'
import { RU_BRANDS as _RU_BRANDS, type BrandLogo } from '../data/brands'

// Re-export для удобства импорта из секций
export const RU_BRANDS = _RU_BRANDS

/**
 * BrandStrip — бегущая строка "Trusted by" / "Наши клиенты".
 *
 * Использует SVG/PNG логотипы из /public/clients/
 * Автоскролл с pause on hover, gradient mask по краям.
 *
 * Пример использования:
 *   <BrandStrip
 *     title="Нам доверяют"
 *     brands={[
 *       { name: 'Wildberries', file: 'wildberries.svg' },
 *       { name: 'Avito', file: 'avito.svg' },
 *     ]}
 *   />
 */
interface Props {
  title?: string
  brands: BrandLogo[]
  size?: 'sm' | 'md' | 'lg'
  speed?: number // секунд на полный цикл (default 30)
  variant?: 'scroll' | 'grid'
  theme?: 'light' | 'dark'
}

const sizeMap = {
  sm: { logo: 'h-6', gap: 'gap-10', text: 'text-xs' },
  md: { logo: 'h-8', gap: 'gap-12', text: 'text-sm' },
  lg: { logo: 'h-10', gap: 'gap-16', text: 'text-base' },
}

export function BrandStrip({
  title = 'Нам доверяют',
  brands,
  size = 'md',
  speed = 30,
  variant = 'scroll',
  theme = 'dark',
}: Props) {
  const [paused, setPaused] = useState(false)
  const sizing = sizeMap[size]

  // Дублируем бренды для seamless loop
  const doubled = variant === 'scroll' ? [...brands, ...brands] : brands

  if (variant === 'grid') {
    return (
      <section className="py-12">
        {title && (
          <h2
            className={`text-center ${sizing.text} font-semibold uppercase tracking-[0.2em] mb-8 ${
              theme === 'dark' ? 'text-ink-dim' : 'text-slate-500'
            }`}
          >
            {title}
          </h2>
        )}
        <div
          className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-5xl mx-auto px-4`}
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`flex items-center justify-center p-3 rounded-lg ${
                theme === 'dark' ? 'hover:bg-bg-surface' : 'hover:bg-slate-100'
              } transition-colors`}
              title={brand.name}
            >
              <img
                src={`/clients/${brand.file}`}
                alt={brand.name}
                loading="lazy"
                className={`${sizing.logo} w-auto opacity-70 hover:opacity-100 transition-opacity ${
                  theme === 'dark' ? 'invert' : ''
                }`}
              />
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 overflow-hidden">
      {title && (
        <h2
          className={`text-center ${sizing.text} font-semibold uppercase tracking-[0.2em] mb-8 ${
            theme === 'dark' ? 'text-ink-dim' : 'text-slate-500'
          }`}
        >
          {title}
        </h2>
      )}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Gradient masks */}
        <div
          className={`absolute inset-y-0 left-0 w-24 z-10 pointer-events-none ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-bg to-transparent'
              : 'bg-gradient-to-r from-white to-transparent'
          }`}
        />
        <div
          className={`absolute inset-y-0 right-0 w-24 z-10 pointer-events-none ${
            theme === 'dark'
              ? 'bg-gradient-to-l from-bg to-transparent'
              : 'bg-gradient-to-l from-white to-transparent'
          }`}
        />

        {/* Scrolling track */}
        <div
          className={`flex ${sizing.gap} ${paused ? '' : 'animate-marquee'}`}
          style={{ animationDuration: `${speed}s`, width: 'max-content' }}
        >
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 flex items-center"
              title={brand.name}
            >
              <img
                src={`/clients/${brand.file}`}
                alt={brand.name}
                loading="lazy"
                className={`${sizing.logo} w-auto opacity-70 hover:opacity-100 ${
                  theme === 'dark' ? 'invert' : ''
                } transition-opacity`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
