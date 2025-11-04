import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const ConstellationIDDemo = () => {
  const apps = [
    {
      name: "Volleyball Platform",
      icon: "Trophy",
      description: "Управление командами и турнирами",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Training Hub",
      icon: "Dumbbell",
      description: "Тренировки и программы развития",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Stats Analytics",
      icon: "BarChart3",
      description: "Подробная статистика и аналитика",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Social Network",
      icon: "Users",
      description: "Сообщество и общение игроков",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const createAuthUrl = (appName: string) => {
    const params = new URLSearchParams({
      app: appName,
      redirect_uri: window.location.origin + "/dashboard",
      scope: "profile,email,teams",
    });
    return `/auth/constellation-id?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Constellation
            </div>
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Icon name="Sparkles" size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Constellation ID
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Единый аккаунт для доступа ко всем сервисам волейбольной экосистемы.
              Войдите один раз — используйте везде.
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium">
                <Icon name="Shield" size={16} />
                Безопасно
              </div>
              <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium">
                <Icon name="Zap" size={16} />
                Быстро
              </div>
              <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full font-medium">
                <Icon name="Lock" size={16} />
                Приватно
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ключевые возможности
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-blue-500 transition-all">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Key" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Один аккаунт</h3>
                  <p className="text-gray-600">
                    Доступ ко всем приложениям экосистемы с одним паролем
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-500 transition-all">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="ShieldCheck" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">OAuth 2.0</h3>
                  <p className="text-gray-600">
                    Современный протокол авторизации с двухфакторной защитой
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-500 transition-all">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Smartphone" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Мобильные устройства</h3>
                  <p className="text-gray-600">
                    Работает на всех платформах: Web, iOS, Android
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Приложения экосистемы
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Попробуйте войти через Constellation ID в любое из наших приложений
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {apps.map((app) => (
                <Card key={app.name} className="border-2 hover:border-blue-500 transition-all group">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${app.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon name={app.icon as any} size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{app.name}</CardTitle>
                        <p className="text-gray-600 text-sm">{app.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href={createAuthUrl(app.name)}>
                      <Button className="w-full" size="lg">
                        <Icon name="LogIn" size={20} className="mr-2" />
                        Войти через Constellation ID
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 shadow-2xl">
            <CardContent className="pt-12 pb-12 text-center">
              <Icon name="Code" size={48} className="mx-auto mb-6 opacity-90" />
              <h3 className="text-3xl font-bold mb-4">Для разработчиков</h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Интегрируйте Constellation ID в свои приложения с помощью простого REST API
                и готовых SDK для популярных языков
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Icon name="Book" size={20} className="mr-2" />
                  Документация API
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Icon name="Github" size={20} className="mr-2" />
                  GitHub SDK
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Как это работает?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold mb-2">Выберите приложение</h4>
                <p className="text-sm text-gray-600">
                  Откройте любой сервис экосистемы Constellation
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold mb-2">Войдите через ID</h4>
                <p className="text-sm text-gray-600">
                  Нажмите "Войти через Constellation ID"
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold mb-2">Разрешите доступ</h4>
                <p className="text-sm text-gray-600">
                  Предоставьте разрешения приложению на безопасной странице
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h4 className="font-semibold mb-2">Готово!</h4>
                <p className="text-sm text-gray-600">
                  Вы вошли и можете пользоваться всеми функциями
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstellationIDDemo;
