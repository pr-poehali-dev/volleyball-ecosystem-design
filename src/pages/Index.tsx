import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Constellation
            </div>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Возможности
            </a>
            <a href="#stats" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Статистика
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              О платформе
            </a>
            <Link to="/constellation-id" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Constellation ID
            </Link>
            <Link to="/login">
              <Button>Войти</Button>
            </Link>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} className="text-gray-600" />
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <img 
            src="https://cdn.poehali.dev/projects/4dc6fe64-b8a2-4153-a66a-b6972f86cb11/files/df6ea339-b2ac-4bc8-a99f-697ffc051e65.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <Icon name="Zap" size={16} />
                Волейбольная платформа нового поколения
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
              Объединяем
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                волейбольное
              </span>
              <br />
              сообщество
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Платформа для игроков, команд и турниров. Тренируйтесь, соревнуйтесь и развивайтесь вместе
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg shadow-blue-500/30">
                  Начать бесплатно
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white animate-scale-in">
              <CardContent className="pt-8 pb-8 text-center">
                <Icon name="Users" size={40} className="mx-auto mb-4 opacity-80" />
                <div className="text-5xl font-bold mb-2">2,500+</div>
                <div className="text-blue-100 text-lg">Активных игроков</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <Icon name="Shield" size={40} className="mx-auto mb-4 text-blue-600" />
                <div className="text-5xl font-bold text-blue-600 mb-2">180+</div>
                <div className="text-gray-600 text-lg">Команд в лиге</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <Icon name="Trophy" size={40} className="mx-auto mb-4 text-blue-600" />
                <div className="text-5xl font-bold text-blue-600 mb-2">45+</div>
                <div className="text-gray-600 text-lg">Турниров в год</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Всё для волейбола
              <br />
              <span className="text-blue-600">в одном месте</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мощные инструменты для управления командами, участия в турнирах и отслеживания прогресса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in group">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Users" size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Управление командами
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Создавайте команды, приглашайте игроков и координируйте тренировки в удобном интерфейсе
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in group" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Trophy" size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Турниры и матчи
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Участвуйте в соревнованиях и отслеживайте результаты матчей в режиме реального времени
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in group" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="BarChart3" size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Аналитика и статистика
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Детальная статистика игр, прогресс команды и индивидуальные показатели каждого игрока
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in group" style={{ animationDelay: '0.3s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Calendar" size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Умное расписание
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Планируйте матчи и тренировки, синхронизируйтесь с календарём и получайте напоминания
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in group" style={{ animationDelay: '0.4s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="MessageSquare" size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Командное общение
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Чаты команд, обсуждения турниров и новости волейбольного сообщества в одном месте
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 animate-fade-in group" style={{ animationDelay: '0.5s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="MapPin" size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Карта площадок
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Находите ближайшие спортивные площадки, бронируйте время и делитесь отзывами
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://cdn.poehali.dev/projects/4dc6fe64-b8a2-4153-a66a-b6972f86cb11/files/599a3380-c6b0-4921-b532-c2dd37ec218f.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Почему Constellation?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Мы создали платформу, которая объединяет всё необходимое для развития волейбольного сообщества
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon name="CheckCircle2" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Простота использования</h4>
                    <p className="text-blue-100">
                      Интуитивный интерфейс, который понятен как профессионалам, так и новичкам
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon name="CheckCircle2" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Всегда на связи</h4>
                    <p className="text-blue-100">
                      Мобильное приложение для iOS и Android — управляйте командой из любой точки
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon name="CheckCircle2" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Безопасность данных</h4>
                    <p className="text-blue-100">
                      Защита персональных данных и конфиденциальность на первом месте
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="pt-8 pb-8 text-center">
                  <Icon name="Clock" size={32} className="mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100">Поддержка</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="pt-8 pb-8 text-center">
                  <Icon name="Globe" size={32} className="mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-blue-100">Стран</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="pt-8 pb-8 text-center">
                  <Icon name="Star" size={32} className="mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">4.9</div>
                  <div className="text-blue-100">Рейтинг</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="pt-8 pb-8 text-center">
                  <Icon name="Zap" size={32} className="mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-blue-100">Uptime</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Присоединяйтесь к волейбольному сообществу и выведите свою игру на новый уровень
          </p>
          <Link to="/register">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg shadow-blue-500/30">
              <Icon name="Rocket" size={20} className="mr-2" />
              Создать аккаунт бесплатно
            </Button>
          </Link>
        </div>
      </section>

      <footer className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900">Constellation</div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Волейбольная экосистема для игроков, команд и турниров
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Продукт</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Возможности
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Обновления
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Компания</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Поддержка</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Документация
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              © 2024 Constellation. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;