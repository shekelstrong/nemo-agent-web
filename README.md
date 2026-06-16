# Nemo Agent

> Твой ИИ-агент в Telegram. Память. Голос. 24/7.

**Landing + CMS для блога.** Входит в экосистему Buildo (20 продуктов).

## 🚀 Стек

- Vite 6 + React 19 + TypeScript
- Tailwind CSS 3.4
- Framer Motion (в резерве)
- Lucide React (иконки)
- iOS 27 Liquid Glass design system

## 📁 Структура

```
├── public/
│   ├── favicon/         # SVG + PNG иконки
│   ├── og/              # OG image для шеринга
│   ├── articles/        # (резерв)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects       # SPA fallback
├── src/
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── sections/    # Hero, Features, Pricing, FAQ, etc
│   │   └── icons/       # SVG-иконки
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Articles.tsx
│   │   └── Article.tsx
│   ├── data/
│   │   ├── features.ts
│   │   └── articles.ts  # 5 SEO-статей, 2000+ слов каждая
│   ├── styles/
│   │   ├── index.css
│   │   ├── glass.css     # iOS 27 Liquid Glass
│   │   ├── hero.css
│   │   └── premium.css
│   ├── hooks/
│   │   └── useInView.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html           # SEO meta, OpenGraph, schema.org
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

## 🛠 Команды

```bash
npm install          # установка зависимостей
npm run dev          # dev-сервер (Vite)
npm run build        # production build
npm run preview      # просмотр prod-билда
npm run typecheck    # TypeScript проверка
```

## 🌐 Деплой на Layero

1. Сделай push в `main` (см. коммиты)
2. В Layero подключи репо `shekelstrong/nemo-agent-web`
3. Build command: `npm run build`
4. Output dir: `dist`
5. Node version: 22
6. Auto-deploy: on push to main

## 📄 5 SEO-статей

1. `ii-agent-dlya-biznesa` — ИИ-агент для бизнеса (2000+ слов)
2. `kak-avtomatizirovat-rutinu` — Автоматизация рутины (2000+ слов)
3. `ii-assistent-telegram` — ИИ в Telegram (2000+ слов)
4. `ii-vs-chatgpt` — Nemo vs ChatGPT (2000+ слов)
5. `kak-vybrat-ii-agenta` — Чек-лист выбора ИИ-агента (2000+ слов)

Каждая статья оптимизирована под HF/MF/LF запросы, содержит meta description, schema.org Article, и 2000+ экспертных слов.

## 🎨 Дизайн-система

- **iOS 27 Liquid Glass:** `glass.css` (backdrop-blur, frosted glass, gradient borders)
- **Hero animations:** `hero.css` (animated counters, chat mockup, SVG orb)
- **Premium components:** `pricing-card`, `feature-card`, `testimonial-card`, `faq-item`

## ⚡ Performance

- Bundle: 278 KB JS (83 KB gzip) + 15 KB CSS (4 KB gzip)
- Code splitting: react-vendor, framer, icons
- Lazy loading через React Router
- First Contentful Paint: <1.5s на 3G

## 📊 Конверсия

- Hero: 3 сек — понять "о чём это"
- 10 сек — увидеть демо (chat mockup)
- 30 сек — поверить
- 60 сек — кликнуть "Попробовать бесплатно" → Telegram

---

Часть экосистемы **Buildo** (20 продуктов, 98% skills coverage).
KB: https://github.com/shekelstrong/nemo-team-docs
