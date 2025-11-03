import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Constellation</h1>
          </Link>
          <p className="text-gray-600">Волейбольная экосистема</p>
        </div>

        <Card className="border-0 shadow-lg animate-fade-in">
          <CardHeader className="space-y-1 pb-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="KeyRound" size={32} className="text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center">
              Восстановление пароля
            </CardTitle>
            <CardDescription className="text-center">
              {!submitted
                ? "Введите email для восстановления доступа"
                : "Инструкции отправлены на email"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Отправить инструкции
                </Button>

                <div className="text-center mt-6">
                  <Link
                    to="/login"
                    className="text-sm text-gray-600 hover:text-primary inline-flex items-center gap-2"
                  >
                    <Icon name="ArrowLeft" size={16} />
                    Вернуться к входу
                  </Link>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800 text-center">
                    Мы отправили инструкции по восстановлению пароля на{" "}
                    <strong>{email}</strong>
                  </p>
                </div>

                <div className="text-sm text-gray-600 space-y-2">
                  <p>Проверьте свою почту и следуйте инструкциям в письме.</p>
                  <p>Не получили письмо? Проверьте папку "Спам".</p>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => setSubmitted(false)}
                >
                  Отправить повторно
                </Button>

                <div className="text-center mt-6">
                  <Link
                    to="/login"
                    className="text-sm text-primary font-semibold hover:underline"
                  >
                    Вернуться к входу
                  </Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;
