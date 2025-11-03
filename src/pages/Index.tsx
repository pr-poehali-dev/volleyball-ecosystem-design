import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Constellation</div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#stats" className="text-gray-600 hover:text-primary transition-colors">
              Статистика
            </a>
            <Button>Войти</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
              Волейбольная
              <br />
              экосистема
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Объединяем игроков, команды и турниры в единую платформу
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm animate-scale-in">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-gray-600 text-lg">Игроков</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2">180+</div>
                <div className="text-gray-600 text-lg">Команд</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2">45+</div>
                <div className="text-gray-600 text-lg">Турниров</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Всё для волейбола
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Управляйте командами, участвуйте в турнирах, следите за статистикой
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Управление командами
              </h3>
              <p className="text-gray-600">
                Создавайте команды, приглашайте игроков и координируйте тренировки
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Trophy" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Турниры
              </h3>
              <p className="text-gray-600">
                Участвуйте в соревнованиях и отслеживайте результаты в реальном времени
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="BarChart3" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Статистика
              </h3>
              <p className="text-gray-600">
                Анализируйте свою игру и следите за прогрессом команды
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Calendar" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Расписание
              </h3>
              <p className="text-gray-600">
                Планируйте матчи и тренировки в удобном календаре
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="MessageSquare" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Общение
              </h3>
              <p className="text-gray-600">
                Чаты команд и обсуждения турниров в одном месте
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Площадки
              </h3>
              <p className="text-gray-600">
                Находите ближайшие спортивные площадки и резервируйте время
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Присоединяйтесь к экосистеме
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Начните играть в волейбол на новом уровне
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Создать аккаунт
          </Button>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold text-gray-900 mb-4">Constellation</div>
              <p className="text-gray-600">
                Волейбольная экосистема для игроков и команд
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Продукт</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Возможности
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Цены
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Компания</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Поддержка</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-600">
            © 2024 Constellation. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
