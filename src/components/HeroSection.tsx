import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
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
  )
}

export default HeroSection