import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ConsultationFormData {
  name: string
  phone: string
}

interface ConsultationFormProps {
  consultationForm: ConsultationFormData
  setConsultationForm: React.Dispatch<React.SetStateAction<ConsultationFormData>>
  handleConsultationSubmit: (e: React.FormEvent) => void
}

const ConsultationForm = ({ consultationForm, setConsultationForm, handleConsultationSubmit }: ConsultationFormProps) => {
  return (
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
  )
}

export default ConsultationForm