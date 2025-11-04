import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const ConstellationID = () => {
  const [searchParams] = useSearchParams();
  const appName = searchParams.get("app") || "Неизвестное приложение";
  const redirectUri = searchParams.get("redirect_uri") || "/";
  const scope = searchParams.get("scope") || "profile,email";
  
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Auth:", { isLogin, formData, redirectUri, scope });
  };

  const handleOAuthProvider = (provider: string) => {
    console.log(`OAuth with ${provider}`, { redirectUri, scope });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://cdn.poehali.dev/projects/4dc6fe64-b8a2-4153-a66a-b6972f86cb11/files/62735c8b-0c51-4944-9f19-b4b64d0412db.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
              <Icon name="Sparkles" size={32} className="text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Constellation ID</h1>
          <p className="text-blue-100 text-lg">Единый вход в экосистему</p>
        </div>

        <Card className="border-0 shadow-2xl animate-scale-in bg-white/95 backdrop-blur-sm">
          <CardContent className="pt-8 pb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon name="Info" size={20} className="text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-blue-900 mb-1">Запрос доступа</div>
                <div className="text-sm text-blue-700">
                  <span className="font-medium">{appName}</span> запрашивает доступ к вашему профилю
                </div>
                <div className="text-xs text-blue-600 mt-2 flex flex-wrap gap-1">
                  {scope.split(',').map((s) => (
                    <span key={s} className="bg-blue-100 px-2 py-1 rounded">
                      {s.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 px-4 rounded-lg font-semibold transition-all ${
                  isLogin
                    ? "bg-white text-blue-600 shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Вход
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 px-4 rounded-lg font-semibold transition-all ${
                  !isLogin
                    ? "bg-white text-blue-600 shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Регистрация
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Имя и фамилия</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Иван Петров"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required={!isLogin}
                  />
                </div>
              )}

              {!isLogin && (
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, agreeTerms: checked as boolean })
                    }
                    required={!isLogin}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-700 cursor-pointer leading-relaxed"
                  >
                    Я согласен с{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      условиями использования
                    </a>{" "}
                    и{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      политикой конфиденциальности
                    </a>
                  </label>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-end">
                  <Link
                    to="/reset-password"
                    className="text-sm text-blue-600 hover:underline font-medium"
                  >
                    Забыли пароль?
                  </Link>
                </div>
              )}

              <Button type="submit" className="w-full" size="lg">
                {isLogin ? "Войти и разрешить доступ" : "Создать аккаунт и разрешить"}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">или продолжить через</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                size="lg"
                onClick={() => handleOAuthProvider("google")}
              >
                <Icon name="Chrome" className="mr-2" size={20} />
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                size="lg"
                onClick={() => handleOAuthProvider("github")}
              >
                <Icon name="Github" className="mr-2" size={20} />
                GitHub
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                size="lg"
                onClick={() => handleOAuthProvider("apple")}
              >
                <Icon name="Apple" className="mr-2" size={20} />
                Apple
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center text-xs text-gray-500 space-y-2">
                <p>
                  Constellation ID — это универсальный аккаунт для доступа ко всем сервисам экосистемы
                </p>
                <div className="flex justify-center gap-4 text-blue-600">
                  <a href="#" className="hover:underline">
                    О Constellation ID
                  </a>
                  <a href="#" className="hover:underline">
                    Конфиденциальность
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
          >
            <Icon name="ArrowLeft" size={16} />
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConstellationID;
