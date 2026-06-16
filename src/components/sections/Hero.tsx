import { useEffect, useRef, useState } from 'react'
import { Sparkles, Mic, Image as ImageIcon, Brain, Zap, MessageCircle, Check } from 'lucide-react'
import { useInView } from '../../hooks/useInView'

const features = [
  {
    icon: Brain,
    title: 'Память между сессиями',
    description: 'Помнит, о чём вы говорили вчера, неделю назад, месяц назад. Как живой ассистент, а не амнезиак.',
    color: '#0A84FF',
  },
  {
    icon: Mic,
    title: 'Голосовые сообщения',
    description: 'Говоришь — он понимает. Отвечает текстом или голосом. На русском, без акцента робота.',
    color: '#AF52DE',
  },
  {
    icon: ImageIcon,
    title: 'Анализ фото',
    description: 'Сфоткал чек → внёс в Google Sheets. Сфоткал визитку → сохранил контакт. Сфоткал задачу → решил.',
    color: '#64D2FF',
  },
  {
    icon: Zap,
    title: 'Действия 24/7',
    description: 'Записывает к врачу, ставит напоминания, проверяет почту, ведёт CRM. Пока ты спишь — он работает.',
    color: '#FF9F0A',
  },
  {
    icon: MessageCircle,
    title: 'Telegram-native',
    description: 'Не надо устанавливать приложение. Открыл Telegram — и ты уже с агентом. На любом устройстве.',
    color: '#34C759',
  },
  {
    icon: Sparkles,
    title: 'ИИ-маршрутизация',
    description: 'Дешёвые модели для рутины, дорогие для сложных задач. Стоимость в 10× ниже, чем у конкурентов.',
    color: '#FF453A',
  },
]

export default function Hero() {
  const { ref, inView } = useInView()
  const chatRef = useRef<HTMLDivElement>(null)

  // Animated counter
  const [stats, setStats] = useState({ users: 0, messages: 0, uptime: 0 })
  useEffect(() => {
    if (!inView) return
    const target = { users: 12500, messages: 2400000, uptime: 99.9 }
    const duration = 2000
    const steps = 60
    let current = 0
    const interval = setInterval(() => {
      current++
      const progress = current / steps
      setStats({
        users: Math.floor(target.users * progress),
        messages: Math.floor(target.messages * progress),
        uptime: parseFloat((target.uptime * progress).toFixed(1)),
      })
      if (current >= steps) clearInterval(interval)
    }, duration / steps)
    return () => clearInterval(interval)
  }, [inView])

  return (
    <section className="hero-section aurora-bg" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text */}
        <div className={`${inView ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Сейчас в открытой бете · 12 500+ пользователей</span>
          </div>

          <h1 className="hero-title">
            Твой{' '}
            <span className="gradient-text-aurora">ИИ-агент</span>
            <br />
            в Telegram.
            <br />
            <span className="text-white/50">Память. Голос. 24/7.</span>
          </h1>

          <p className="hero-subtitle">
            Помнит контекст. Понимает голос и фото. Делает за тебя, пока ты спишь.
            Не очередной чат-бот — личный ассистент, который знает твой бизнес.
          </p>

          <div className="hero-actions">
            <a
              href="https://t.me/nemo_agent_bot"
              target="_blank"
              rel="noreferrer"
              className="glass-btn glass-btn-primary"
            >
              <Sparkles className="w-5 h-5" />
              Попробовать бесплатно
            </a>
            <a href="#how" className="glass-btn glass-btn-secondary">
              Как это работает
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-value">{stats.users.toLocaleString('ru-RU')}+</div>
              <div className="hero-stat-label">Пользователей</div>
            </div>
            <div>
              <div className="hero-stat-value">{(stats.messages / 1000000).toFixed(1)}M</div>
              <div className="hero-stat-label">Сообщений</div>
            </div>
            <div>
              <div className="hero-stat-value">{stats.uptime}%</div>
              <div className="hero-stat-label">Uptime</div>
            </div>
          </div>
        </div>

        {/* Right: Chat Mock */}
        <div className={`hero-preview ${inView ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="hero-chat-mock animate-float" ref={chatRef}>
            <div className="hero-chat-header">
              <div className="hero-chat-avatar">🐟</div>
              <div className="hero-chat-status">
                <div className="hero-chat-name">Nemo Agent</div>
                <div className="hero-chat-online">онлайн</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="hero-chat-message user" style={{ animationDelay: '0.5s' }}>
                <div className="hero-chat-bubble user">Запиши стоматолога на четверг в 15:00</div>
              </div>
              <div className="hero-chat-message" style={{ animationDelay: '1.2s' }}>
                <div className="hero-chat-bubble bot">
                  Готово ✓<br />
                  Стоматология "Белая улыбка", 4 июля, 15:00.<br />
                  Поставлю напоминание за день и за час.
                </div>
              </div>
              <div className="hero-chat-message user" style={{ animationDelay: '2s' }}>
                <div className="hero-chat-bubble user">Сколько я потратил в мае?</div>
              </div>
              <div className="hero-chat-message" style={{ animationDelay: '2.7s' }}>
                <div className="hero-chat-bubble bot">
                  Май: 87 450₽.<br />
                  Основные категории: продукты (32к), кафе (18к), транспорт (12к).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Orb decoration */}
      <div className="hero-orb hidden lg:block">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="orbCenter" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#AF52DE" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A84FF" />
              <stop offset="50%" stopColor="#AF52DE" />
              <stop offset="100%" stopColor="#64D2FF" />
            </linearGradient>
          </defs>

          {/* Outer glow */}
          <circle cx="300" cy="300" r="280" fill="url(#orbCenter)">
            <animate attributeName="r" values="280;320;280" dur="6s" repeatCount="indefinite" />
          </circle>

          {/* Rotating ring */}
          <g>
            <circle cx="300" cy="300" r="220" fill="none" stroke="url(#ringGrad)" strokeWidth="1" opacity="0.4">
              <animateTransform attributeName="transform" type="rotate" from="0 300 300" to="360 300 300" dur="30s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Middle ring */}
          <g>
            <circle cx="300" cy="300" r="160" fill="none" stroke="url(#ringGrad)" strokeWidth="1" opacity="0.3">
              <animateTransform attributeName="transform" type="rotate" from="360 300 300" to="0 300 300" dur="20s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Inner ring */}
          <g>
            <circle cx="300" cy="300" r="100" fill="none" stroke="url(#ringGrad)" strokeWidth="1" opacity="0.5">
              <animateTransform attributeName="transform" type="rotate" from="0 300 300" to="360 300 300" dur="15s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Neural nodes */}
          {[
            { x: 300, y: 100, color: '#0A84FF' },
            { x: 480, y: 200, color: '#AF52DE' },
            { x: 480, y: 400, color: '#64D2FF' },
            { x: 300, y: 500, color: '#34C759' },
            { x: 120, y: 400, color: '#FF9F0A' },
            { x: 120, y: 200, color: '#FF453A' },
          ].map((node, i) => (
            <g key={i}>
              <circle cx={node.x} cy={node.y} r="6" fill={node.color}>
                <animate attributeName="r" values="6;9;6" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={node.x} cy={node.y} r="20" fill="none" stroke={node.color} strokeWidth="1" opacity="0.3">
                <animate attributeName="r" values="20;30;20" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}

          {/* Neural connections */}
          <g stroke="url(#ringGrad)" strokeWidth="0.5" opacity="0.4">
            <line x1="300" y1="100" x2="480" y2="200">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="480" y1="200" x2="480" y2="400">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.3s" repeatCount="indefinite" />
            </line>
            <line x1="480" y1="400" x2="300" y2="500">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.6s" repeatCount="indefinite" />
            </line>
            <line x1="300" y1="500" x2="120" y2="400">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.9s" repeatCount="indefinite" />
            </line>
            <line x1="120" y1="400" x2="120" y2="200">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3.2s" repeatCount="indefinite" />
            </line>
            <line x1="120" y1="200" x2="300" y2="100">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3.5s" repeatCount="indefinite" />
            </line>
          </g>

          {/* Central core */}
          <circle cx="300" cy="300" r="40" fill="url(#ringGrad)" opacity="0.8">
            <animate attributeName="r" values="40;50;40" dur="4s" repeatCount="indefinite" />
          </circle>
          <text x="300" y="312" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold">N</text>
        </svg>
      </div>
    </section>
  )
}
