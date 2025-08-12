import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface ApplicationFormData {
  name: string
  phone: string
  email: string
  age: string
  region: string
  profession: string
  experience: string
  message: string
}

interface ApplicationFormProps {
  applicationForm: ApplicationFormData
  setApplicationForm: React.Dispatch<React.SetStateAction<ApplicationFormData>>
  handleApplicationSubmit: (e: React.FormEvent) => void
}

const ApplicationForm = ({ applicationForm, setApplicationForm, handleApplicationSubmit }: ApplicationFormProps) => {
  return (
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
  )
}

export default ApplicationForm