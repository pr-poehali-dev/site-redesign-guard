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
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">З</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ЗАЩИТНИК.РФ</h1>
                <p className="text-sm text-gray-600">Контракт на военную службу</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="tel:+78001001253" className="text-blue-600 font-bold text-lg hover:text-blue-800">
                8 (800) 100-12-53
              </a>
              <Button className="bg-red-600 hover:bg-red-700 px-6 py-2 text-white font-semibold">
                Заключить контракт
              </Button>
            </div>
            <Button className="lg:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              КОНТРАКТ НА СВО:<br />
              ПРОЙДИ ОТБОР И ЗАКЛЮЧИ<br />
              КОНТРАКТ НА ВОЕННУЮ СЛУЖБУ
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-4xl leading-relaxed">
              Как подписать контракт на СВО Минобороны на военную службу: условия для российских 
              граждан и иностранцев на Защитник.РФ. Пункты отбора на военную службу по контракту в Москве
            </p>
            <p className="text-lg md:text-xl text-blue-200 mb-10 max-w-4xl">
              Защищай Родину с достойной зарплатой от 204 000 рублей в месяц, 
              социальными гарантиями и поддержкой государства
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4">
                ПОДАТЬ ЗАЯВКУ НА КОНТРАКТ
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold">
                ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Block */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Icon name="Info" size={32} className="text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">ВАЖНАЯ ИНФОРМАЦИЯ</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
              <div>
                <p className="mb-4">
                  <strong>Для граждан Российской Федерации:</strong> возраст от 18 до 50 лет, 
                  наличие среднего образования, годность по состоянию здоровья.
                </p>
                <p>
                  <strong>Для иностранных граждан:</strong> возраст от 18 до 50 лет, 
                  знание русского языка, возможность получения российского гражданства.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  <strong>Денежное довольствие:</strong> от 204 000 рублей в месяц + премии и доплаты.
                </p>
                <p>
                  <strong>Социальные гарантии:</strong> полный пакет льгот, медицинское обслуживание, 
                  обеспечение жильем.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            ПРЕИМУЩЕСТВА СЛУЖБЫ ПО КОНТРАКТУ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Banknote" size={40} className="text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">ДОСТОЙНАЯ ОПЛАТА</h4>
              <p className="text-2xl text-green-600 font-bold mb-2">от 204 000 ₽</p>
              <p className="text-gray-600 text-lg">в месяц + премии и доплаты</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={40} className="text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">СОЦИАЛЬНАЯ ЗАЩИТА</h4>
              <p className="text-xl text-blue-600 font-bold mb-2">Полный пакет</p>
              <p className="text-gray-600 text-lg">льгот и гарантий</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="GraduationCap" size={40} className="text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">ОБУЧЕНИЕ</h4>
              <p className="text-xl text-purple-600 font-bold mb-2">Бесплатно</p>
              <p className="text-gray-600 text-lg">профессиональная подготовка</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Home" size={40} className="text-orange-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">ЖИЛЬЕ</h4>
              <p className="text-xl text-orange-600 font-bold mb-2">Обеспечение</p>
              <p className="text-gray-600 text-lg">служебным жильем</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">В ЦИФРАХ</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-blue-800 p-8 rounded-lg">
              <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">300+</div>
              <p className="text-xl">военных специальностей</p>
            </div>
            <div className="bg-blue-800 p-8 rounded-lg">
              <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">85</div>
              <p className="text-xl">субъектов РФ</p>
            </div>
            <div className="bg-blue-800 p-8 rounded-lg">
              <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">204+</div>
              <p className="text-xl">тысяч рублей в месяц</p>
            </div>
            <div className="bg-blue-800 p-8 rounded-lg">
              <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">24/7</div>
              <p className="text-xl">поддержка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            ТРЕБОВАНИЯ К КАНДИДАТАМ
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-10 rounded-lg">
              <h4 className="text-3xl font-bold text-gray-900 mb-8 text-center">ДЛЯ ГРАЖДАН РФ</h4>
              <ul className="space-y-6 text-xl">
                <li className="flex items-start space-x-4">
                  <Icon name="CheckCircle" size={28} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Возраст от 18 до 50 лет</span>
                </li>
                <li className="flex items-start space-x-4">
                  <Icon name="CheckCircle" size={28} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Образование не ниже основного общего (9 классов)</span>
                </li>
                <li className="flex items-start space-x-4">
                  <Icon name="CheckCircle" size={28} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Годность по состоянию здоровья</span>
                </li>
                <li className="flex items-start space-x-4">
                  <Icon name="CheckCircle" size={28} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Отсутствие непогашенной судимости</span>
                </li>
                <li className="flex items-start space-x-4">
                  <Icon name="CheckCircle" size={28} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Психологическая устойчивость</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-10 rounded-lg">
              <h4 className="text-3xl font-bold text-gray-900 mb-8 text-center">ДЛЯ ИНОСТРАНЦЕВ</h4>
              <ul className="space-y-6 text-xl">
                <li className="flex items-start space-x-4">
                  <Icon name="CheckCircle" size={28} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Возраст от 18 до 50 лет</span>
                </li>
                <li className="flex items-start space-x-4">
                  <Icon name="CheckCircle" size={28} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Владение русским языком на достаточном уровне</span>
                </li>
                <li className="flex items-start space-x-4">
                  <Icon name="CheckCircle" size={28} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Отсутствие двойного гражданства</span>
                </li>
                <li className="flex items-start space-x-4">
                  <Icon name="CheckCircle" size={28} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Получение гражданства РФ после службы</span>
                </li>
                <li className="flex items-start space-x-4">
                  <Icon name="CheckCircle" size={28} className="text-green-500 mt-1 flex-shrink-0" />
                  <span>Отсутствие административных нарушений</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ПОДАТЬ ЗАЯВКУ НА КОНТРАКТ
            </h3>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Заполните форму, и наш специалист свяжется с вами в течение 24 часов 
              для проведения первичной консультации
            </p>
          </div>
          
          <Card className="border-2 border-blue-200 shadow-2xl">
            <CardContent className="p-10">
              <form onSubmit={handleApplicationSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-xl font-bold text-gray-900">Фамилия Имя Отчество *</Label>
                    <Input
                      id="name"
                      value={applicationForm.name}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Иванов Иван Иванович"
                      className="text-xl p-4 h-14"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-xl font-bold text-gray-900">Контактный телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={applicationForm.phone}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+7 (999) 123-45-67"
                      className="text-xl p-4 h-14"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-xl font-bold text-gray-900">Электронная почта</Label>
                    <Input
                      id="email"
                      type="email"
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="ivan@example.com"
                      className="text-xl p-4 h-14"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="age" className="text-xl font-bold text-gray-900">Возраст *</Label>
                    <Input
                      id="age"
                      type="number"
                      min="18"
                      max="50"
                      value={applicationForm.age}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, age: e.target.value }))}
                      placeholder="25"
                      className="text-xl p-4 h-14"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="region" className="text-xl font-bold text-gray-900">Регион проживания *</Label>
                    <Select value={applicationForm.region} onValueChange={(value) => setApplicationForm(prev => ({ ...prev, region: value }))}>
                      <SelectTrigger className="text-xl p-4 h-14">
                        <SelectValue placeholder="Выберите ваш регион" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="moscow">г. Москва</SelectItem>
                        <SelectItem value="spb">г. Санкт-Петербург</SelectItem>
                        <SelectItem value="moscow-region">Московская область</SelectItem>
                        <SelectItem value="leningrad">Ленинградская область</SelectItem>
                        <SelectItem value="krasnodar">Краснодарский край</SelectItem>
                        <SelectItem value="rostov">Ростовская область</SelectItem>
                        <SelectItem value="tatarstan">Республика Татарстан</SelectItem>
                        <SelectItem value="bashkortostan">Республика Башкортостан</SelectItem>
                        <SelectItem value="sverdlovsk">Свердловская область</SelectItem>
                        <SelectItem value="chelyabinsk">Челябинская область</SelectItem>
                        <SelectItem value="novosibirsk">Новосибирская область</SelectItem>
                        <SelectItem value="other">Другой регион</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="profession" className="text-xl font-bold text-gray-900">Желаемая военная специальность</Label>
                    <Select value={applicationForm.profession} onValueChange={(value) => setApplicationForm(prev => ({ ...prev, profession: value }))}>
                      <SelectTrigger className="text-xl p-4 h-14">
                        <SelectValue placeholder="Выберите специальность" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="infantry">Мотострелковые войска</SelectItem>
                        <SelectItem value="artillery">Артиллерия</SelectItem>
                        <SelectItem value="tank">Танковые войска</SelectItem>
                        <SelectItem value="aviation">Военно-воздушные силы</SelectItem>
                        <SelectItem value="navy">Военно-морской флот</SelectItem>
                        <SelectItem value="communications">Войска связи</SelectItem>
                        <SelectItem value="engineering">Инженерные войска</SelectItem>
                        <SelectItem value="logistics">Тыловое обеспечение</SelectItem>
                        <SelectItem value="medical">Медицинская служба</SelectItem>
                        <SelectItem value="intelligence">Разведка</SelectItem>
                        <SelectItem value="other">Другая специальность</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="experience" className="text-xl font-bold text-gray-900">Опыт работы, военной службы, образование</Label>
                  <Textarea
                    id="experience"
                    value={applicationForm.experience}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, experience: e.target.value }))}
                    placeholder="Расскажите о своем профессиональном опыте, военной службе, образовании, специальных навыках..."
                    rows={5}
                    className="text-xl p-4"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-xl font-bold text-gray-900">Дополнительная информация</Label>
                  <Textarea
                    id="message"
                    value={applicationForm.message}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Вопросы по контракту, особые пожелания, дополнительная информация..."
                    rows={4}
                    className="text-xl p-4"
                  />
                </div>
                
                <div className="pt-6">
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-2xl py-6 h-16">
                    ОТПРАВИТЬ ЗАЯВКУ НА КОНТРАКТ
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
            </h3>
            <p className="text-2xl text-blue-100">
              Остались вопросы о контракте? Наши специалисты ответят на все ваши вопросы 
              и расскажут подробно о всех условиях службы
            </p>
          </div>
          
          <Card className="bg-white text-gray-900 shadow-2xl">
            <CardContent className="p-10">
              <form onSubmit={handleConsultationSubmit} className="space-y-8">
                <div className="space-y-3">
                  <Label htmlFor="consultation-name" className="text-xl font-bold text-gray-900">Как к вам обращаться? *</Label>
                  <Input
                    id="consultation-name"
                    value={consultationForm.name}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Введите ваше имя"
                    className="text-xl p-4 h-14"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="consultation-phone" className="text-xl font-bold text-gray-900">Контактный телефон *</Label>
                  <Input
                    id="consultation-phone"
                    type="tel"
                    value={consultationForm.phone}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+7 (999) 123-45-67"
                    className="text-xl p-4 h-14"
                    required
                  />
                </div>
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-2xl py-6 h-16">
                    ЗАКАЗАТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            КОНТАКТНАЯ ИНФОРМАЦИЯ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Phone" size={40} className="text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">ГОРЯЧАЯ ЛИНИЯ</h4>
              <a href="tel:+78001001253" className="text-3xl text-blue-600 font-bold hover:text-blue-800 block mb-2">
                8 (800) 100-12-53
              </a>
              <p className="text-gray-600 text-lg">Звонок бесплатный по всей России</p>
              <p className="text-gray-600">Работаем круглосуточно</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Mail" size={40} className="text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">ЭЛЕКТРОННАЯ ПОЧТА</h4>
              <a href="mailto:info@xn--80aneakq8a4c.xn--p1ai" className="text-xl text-green-600 hover:text-green-800 font-semibold block mb-2">
                info@защитник.рф
              </a>
              <p className="text-gray-600 text-lg">Ответим в течение 24 часов</p>
              <p className="text-gray-600">Официальная переписка</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" size={40} className="text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">РЕЖИМ РАБОТЫ</h4>
              <p className="text-3xl text-purple-600 font-bold mb-2">24/7</p>
              <p className="text-gray-600 text-lg">Без выходных и праздников</p>
              <p className="text-gray-600">Круглосуточная поддержка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            ПУНКТЫ ОТБОРА НА ВОЕННУЮ СЛУЖБУ ПО КОНТРАКТУ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">МОСКВА</h4>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-start">
                  <Icon name="MapPin" size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  ул. Знаменка, д. 19
                </p>
                <p className="flex items-start">
                  <Icon name="Phone" size={20} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  8 (495) 123-45-67
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">САНКТ-ПЕТЕРБУРГ</h4>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-start">
                  <Icon name="MapPin" size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  Дворцовая площадь, д. 2
                </p>
                <p className="flex items-start">
                  <Icon name="Phone" size={20} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  8 (812) 234-56-78
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">ДРУГИЕ РЕГИОНЫ</h4>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-start">
                  <Icon name="Phone" size={20} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  8 (800) 100-12-53
                </p>
                <p className="text-sm">Уточните адрес ближайшего пункта отбора по телефону</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">З</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">ЗАЩИТНИК.РФ</h4>
                  <p className="text-gray-400">Официальный портал контрактной службы</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Официальный портал Министерства обороны Российской Федерации для заключения 
                контрактов на военную службу в рамках специальной военной операции. 
                Полная информационная и юридическая поддержка кандидатов.
              </p>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <Icon name="Phone" size={20} className="text-blue-400 mr-3" />
                  Телефон: <a href="tel:+78001001253" className="text-blue-400 hover:text-blue-300 ml-2">8 (800) 100-12-53</a>
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={20} className="text-green-400 mr-3" />
                  Email: <a href="mailto:info@xn--80aneakq8a4c.xn--p1ai" className="text-green-400 hover:text-green-300 ml-2">info@защитник.рф</a>
                </p>
              </div>
            </div>
            
            <div>
              <h5 className="text-xl font-bold mb-6">Основные услуги</h5>
              <div className="space-y-3 text-gray-300">
                <p className="hover:text-white cursor-pointer">Заключение контракта</p>
                <p className="hover:text-white cursor-pointer">Бесплатные консультации</p>
                <p className="hover:text-white cursor-pointer">Профессиональный отбор</p>
                <p className="hover:text-white cursor-pointer">Поддержка контрактников</p>
                <p className="hover:text-white cursor-pointer">Юридическое сопровождение</p>
              </div>
            </div>
            
            <div>
              <h5 className="text-xl font-bold mb-6">Полезная информация</h5>
              <div className="space-y-3 text-gray-300">
                <p className="hover:text-white cursor-pointer">Требования к кандидатам</p>
                <p className="hover:text-white cursor-pointer">Условия военной службы</p>
                <p className="hover:text-white cursor-pointer">Социальные льготы</p>
                <p className="hover:text-white cursor-pointer">Денежное довольствие</p>
                <p className="hover:text-white cursor-pointer">Часто задаваемые вопросы</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              &copy; 2024 ЗАЩИТНИК.РФ - Официальный портал контрактной службы. 
              Все права защищены. Материалы сайта предназначены для лиц старше 18 лет.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index