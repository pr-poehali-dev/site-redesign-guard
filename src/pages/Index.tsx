import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    profession: '',
    region: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Форма отправлена:', contactForm)
    // Здесь будет логика отправки формы
  }

  const professions = [
    'Менеджер по продажам',
    'Маркетинг-специалист', 
    'HR-специалист',
    'Финансовый аналитик',
    'Юрист',
    'IT-специалист',
    'Логист',
    'Бухгалтер'
  ]

  const regions = [
    'Москва',
    'Санкт-Петербург',
    'Московская область',
    'Новосибирск',
    'Екатеринбург',
    'Нижний Новгород',
    'Казань',
    'Челябинск',
    'Омск',
    'Самара'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-slate-900">Защитник.РФ</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-primary transition-colors">Главная</a>
              <a href="#professions" className="text-slate-700 hover:text-primary transition-colors">Профессии</a>
              <a href="#regions" className="text-slate-700 hover:text-primary transition-colors">Регионы</a>
              <a href="#conditions" className="text-slate-700 hover:text-primary transition-colors">Условия</a>
              <a href="#contact" className="text-slate-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Заключи контракт на военную службу</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Пройди профессиональный отбор и стань частью команды защитников России. 
            Стабильная работа, достойная зарплата, социальные гарантии.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              <Icon name="FileText" size={20} className="mr-2" />
              Подать заявку
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <p className="text-slate-600">Профессий</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">85</div>
              <p className="text-slate-600">Регионов</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50000+</div>
              <p className="text-slate-600">Контрактников</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-slate-600">Гарантии</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professions Section */}
      <section id="professions" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Доступные профессии</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Выберите специальность, которая соответствует вашим навыкам и интересам
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professions.map((profession, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Briefcase" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{profession}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section id="regions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Регионы службы</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Выберите удобный для вас регион прохождения службы
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {regions.map((region, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Icon name="MapPin" size={24} className="text-primary mx-auto mb-2" />
                  <p className="font-medium text-slate-900">{region}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section id="conditions" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Условия службы</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Современные условия и социальные гарантии для каждого контрактника
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Banknote" size={32} className="text-green-600" />
                </div>
                <CardTitle>Достойная оплата</CardTitle>
                <CardDescription>От 204 000 рублей в месяц</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Стабильная заработная плата с возможностью премий и доплат</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-blue-600" />
                </div>
                <CardTitle>Соцгарантии</CardTitle>
                <CardDescription>Полный социальный пакет</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Медицинское обслуживание, отпуск, пенсионное обеспечение</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="GraduationCap" size={32} className="text-purple-600" />
                </div>
                <CardTitle>Обучение</CardTitle>
                <CardDescription>Профессиональная подготовка</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Обучение новым навыкам и повышение квалификации</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Подать заявку</h3>
              <p className="text-lg text-slate-600">
                Заполните форму, и наш специалист свяжется с вами для консультации
              </p>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Введите ваше имя"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="profession">Интересующая профессия</Label>
                      <Select value={contactForm.profession} onValueChange={(value) => setContactForm(prev => ({ ...prev, profession: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите профессию" />
                        </SelectTrigger>
                        <SelectContent>
                          {professions.map((profession, index) => (
                            <SelectItem key={index} value={profession}>{profession}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="region">Предпочитаемый регион</Label>
                      <Select value={contactForm.region} onValueChange={(value) => setContactForm(prev => ({ ...prev, region: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите регион" />
                        </SelectTrigger>
                        <SelectContent>
                          {regions.map((region, index) => (
                            <SelectItem key={index} value={region}>{region}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Расскажите о себе, своем опыте или задайте вопрос..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Shield" size={24} className="text-primary" />
                <h4 className="text-lg font-semibold">Защитник.РФ</h4>
              </div>
              <p className="text-slate-400">
                Официальный портал для заключения контрактов на военную службу
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Разделы</h5>
              <div className="space-y-2">
                <a href="#professions" className="block text-slate-400 hover:text-white transition-colors">Профессии</a>
                <a href="#regions" className="block text-slate-400 hover:text-white transition-colors">Регионы</a>
                <a href="#conditions" className="block text-slate-400 hover:text-white transition-colors">Условия</a>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Контакты</h5>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>8 (800) 100-00-00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@защитник.рф</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Поддержка</h5>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Часто задаваемые вопросы</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Техподдержка</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Правила</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Защитник.РФ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index