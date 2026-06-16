import { Sparkles, Github, Send, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32 py-16">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-ios-blue via-ios-purple to-ios-teal flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-base font-bold text-white">Nemo Agent</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Твой ИИ-агент в Telegram.<br />
              Память. Голос. 24/7.
            </p>
          </div>

          {/* Продукт */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Продукт</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="/#features" className="hover:text-white transition-colors">Возможности</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Тарифы</a></li>
              <li><a href="/#how" className="hover:text-white transition-colors">Как работает</a></li>
              <li><a href="/articles" className="hover:text-white transition-colors">Блог</a></li>
            </ul>
          </div>

          {/* Ресурсы */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Ресурсы</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="/articles/ai-agent-dlya-biznesa" className="hover:text-white transition-colors">AI-агент для бизнеса</a></li>
              <li><a href="/articles/kak-avtomatizirovat-rutinu" className="hover:text-white transition-colors">Автоматизация рутины</a></li>
              <li><a href="/articles/ii-assistent-telegram" className="hover:text-white transition-colors">ИИ в Telegram</a></li>
              <li><a href="/articles/ii-vs-chatgpt" className="hover:text-white transition-colors">Nemo vs ChatGPT</a></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Контакты</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="https://t.me/nemo_agent_bot" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Send className="w-4 h-4" /> Telegram-бот
                </a>
              </li>
              <li>
                <a href="mailto:hello@nemo-agent.ru" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" /> hello@nemo-agent.ru
                </a>
              </li>
              <li>
                <a href="https://github.com/shekelstrong/nemo-agent-web" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Nemo Agent. Часть экосистемы Buildo. Все права защищены.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1.5">
            Сделано с <Heart className="w-3 h-3 text-ios-red fill-ios-red" /> в России
          </p>
        </div>
      </div>
    </footer>
  )
}
