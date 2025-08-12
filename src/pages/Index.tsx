import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    region: '',
    profession: '',
    experience: '',
    message: ''
  })

  const [consultationForm, setConsultationForm] = useState({
    name: '',
    phone: ''
  })

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Заявка на контракт:', applicationForm)
  }

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Заявка на консультацию:', consultationForm)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">З</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ЗАЩИТНИК.РФ</h1>
                <p className="text-sm text-gray-600">Контракт на военную службу</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <span className="text-blue-600 font-semibold">8 (800) 100-12-53</span>
              <Button className="bg-red-600 hover:bg-red-700">
                Заключить контракт
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              КОНТРАКТ НА СВО:
              <br />
              ПРОЙДИ ОТБОР И ЗАКЛЮЧИ
              <br />
              КОНТРАКТ НА ВОЕННУЮ СЛУЖБУ
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Защищай Родину с достойной зарплатой от 204 000 рублей в месяц, 
              социальными гарантиями и поддержкой государства
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
                ПОДАТЬ ЗАЯВКУ НА КОНТРАКТ
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-900">
                ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ПРЕИМУЩЕСТВА СЛУЖБЫ ПО КОНТРАКТУ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Banknote" size={32} className="text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">ДОСТОЙНАЯ ОПЛАТА</h4>
              <p className="text-lg text-green-600 font-semibold mb-2">от 204 000 ₽</p>
              <p className="text-gray-600">в месяц + премии и доплаты</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">СОЦИАЛЬНАЯ ЗАЩИТА</h4>
              <p className="text-lg text-blue-600 font-semibold mb-2">Полный пакет</p>
              <p className="text-gray-600">льгот и гарантий</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="GraduationCap" size={32} className="text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">ОБУЧЕНИЕ</h4>
              <p className="text-lg text-purple-600 font-semibold mb-2">Бесплатно</p>
              <p className="text-gray-600">профессиональная подготовка</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Home" size={32} className="text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">ЖИЛЬЕ</h4>
              <p className="text-lg text-orange-600 font-semibold mb-2">Обеспечение</p>
              <p className="text-gray-600">служебным жильем</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">300+</div>
              <p className="text-lg">военных специальностей</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">85</div>
              <p className="text-lg">субъектов РФ</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">100%</div>
              <p className="text-lg">трудоустройство</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">24/7</div>
              <p className="text-lg">поддержка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ТРЕБОВАНИЯ К КАНДИДАТАМ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">ДЛЯ ГРАЖДАН РФ:</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500 mt-0.5" />
                  <span>Возраст от 18 до 50 лет</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500 mt-0.5" />
                  <span>Образование не ниже основного общего</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500 mt-0.5" />
                  <span>Годность по состоянию здоровья</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500 mt-0.5" />
                  <span>Отсутствие судимости</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">ДЛЯ ИНОСТРАНЦЕВ:</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500 mt-0.5" />
                  <span>Возраст от 18 до 50 лет</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500 mt-0.5" />
                  <span>Знание русского языка</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500 mt-0.5" />
                  <span>Отсутствие двойного гражданства</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500 mt-0.5" />
                  <span>Получение гражданства РФ после службы</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              ПОДАТЬ ЗАЯВКУ НА КОНТРАКТ
            </h3>
            <p className="text-xl text-center text-gray-600 mb-12">
              Заполните форму, и мы свяжемся с вами в течение 24 часов
            </p>
            
            <Card className="border-2 border-blue-200">
              <CardContent className="p-8">
                <form onSubmit={handleApplicationSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-lg font-semibold">Фамилия Имя Отчество *</Label>
                      <Input
                        id="name"
                        value={applicationForm.name}
                        onChange={(e) => setApplicationForm(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Иванов Иван Иванович"
                        className="text-lg p-3"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-lg font-semibold">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={applicationForm.phone}
                        onChange={(e) => setApplicationForm(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+7 (999) 123-45-67"
                        className="text-lg p-3"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-lg font-semibold">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="ivan@example.com"
                        className="text-lg p-3"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-lg font-semibold">Возраст *</Label>
                      <Input
                        id="age"
                        type="number"
                        min="18"
                        max="50"
                        value={applicationForm.age}
                        onChange={(e) => setApplicationForm(prev => ({ ...prev, age: e.target.value }))}
                        placeholder="25"
                        className="text-lg p-3"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="region" className="text-lg font-semibold">Регион проживания *</Label>
                      <Select value={applicationForm.region} onValueChange={(value) => setApplicationForm(prev => ({ ...prev, region: value }))}>
                        <SelectTrigger className="text-lg p-3">
                          <SelectValue placeholder="Выберите регион" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="moscow">Москва</SelectItem>
                          <SelectItem value="spb">Санкт-Петербург</SelectItem>
                          <SelectItem value="moscow-region">Московская область</SelectItem>
                          <SelectItem value="krasnodar">Краснодарский край</SelectItem>
                          <SelectItem value="rostov">Ростовская область</SelectItem>
                          <SelectItem value="tatarstan">Республика Татарстан</SelectItem>
                          <SelectItem value="bashkortostan">Республика Башкортостан</SelectItem>
                          <SelectItem value="sverdlovsk">Свердловская область</SelectItem>
                          <SelectItem value="chelyabinsk">Челябинская область</SelectItem>
                          <SelectItem value="novosibirsk">Новосибирская область</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="profession" className="text-lg font-semibold">Желаемая специальность</Label>
                      <Select value={applicationForm.profession} onValueChange={(value) => setApplicationForm(prev => ({ ...prev, profession: value }))}>
                        <SelectTrigger className="text-lg p-3">
                          <SelectValue placeholder="Выберите специальность" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="infantry">Мотострелковые войска</SelectItem>
                          <SelectItem value="artillery">Артиллерия</SelectItem>
                          <SelectItem value="communications">Войска связи</SelectItem>
                          <SelectItem value="engineering">Инженерные войска</SelectItem>
                          <SelectItem value="logistics">Тыл</SelectItem>
                          <SelectItem value="medical">Медицинская служба</SelectItem>
                          <SelectItem value="aviation">Военно-воздушные силы</SelectItem>
                          <SelectItem value="navy">Военно-морской флот</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-lg font-semibold">Опыт работы/службы</Label>
                    <Textarea
                      id="experience"
                      value={applicationForm.experience}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, experience: e.target.value }))}
                      placeholder="Расскажите о своем опыте работы, образовании, навыках..."
                      rows={4}
                      className="text-lg p-3"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-lg font-semibold">Дополнительная информация</Label>
                    <Textarea
                      id="message"
                      value={applicationForm.message}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Вопросы, пожелания, дополнительная информация..."
                      rows={3}
                      className="text-lg p-3"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-xl py-4">
                    ОТПРАВИТЬ ЗАЯВКУ НА КОНТРАКТ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Остались вопросы? Наши специалисты ответят на все ваши вопросы
            </p>
            
            <Card className="bg-white text-gray-900">
              <CardContent className="p-8">
                <form onSubmit={handleConsultationSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="consultation-name" className="text-lg font-semibold">Ваше имя *</Label>
                    <Input
                      id="consultation-name"
                      value={consultationForm.name}
                      onChange={(e) => setConsultationForm(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Введите ваше имя"
                      className="text-lg p-3"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="consultation-phone" className="text-lg font-semibold">Телефон *</Label>
                    <Input
                      id="consultation-phone"
                      type="tel"
                      value={consultationForm.phone}
                      onChange={(e) => setConsultationForm(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+7 (999) 123-45-67"
                      className="text-lg p-3"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-xl py-4">
                    ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            КОНТАКТЫ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">ГОРЯЧАЯ ЛИНИЯ</h4>
              <p className="text-2xl text-blue-600 font-bold">8 (800) 100-12-53</p>
              <p className="text-gray-600">Звонок бесплатный</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">EMAIL</h4>
              <p className="text-lg text-green-600">info@защитник.рф</p>
              <p className="text-gray-600">Ответим в течение 24 часов</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">РЕЖИМ РАБОТЫ</h4>
              <p className="text-lg text-purple-600">24/7</p>
              <p className="text-gray-600">Без выходных</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">З</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">ЗАЩИТНИК.РФ</h4>
                  <p className="text-gray-400">Контракт на военную службу</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Официальный портал для заключения контрактов на военную службу 
                в рамках специальной военной операции
              </p>
              <div className="text-gray-400">
                <p>Телефон: <span className="text-blue-400">8 (800) 100-12-53</span></p>
                <p>Email: <span className="text-blue-400">info@защитник.рф</span></p>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Услуги</h5>
              <div className="space-y-2 text-gray-400">
                <p>Заключение контракта</p>
                <p>Консультации</p>
                <p>Отбор кандидатов</p>
                <p>Поддержка контрактников</p>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Информация</h5>
              <div className="space-y-2 text-gray-400">
                <p>Требования</p>
                <p>Условия службы</p>
                <p>Льготы и гарантии</p>
                <p>Часто задаваемые вопросы</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ЗАЩИТНИК.РФ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index