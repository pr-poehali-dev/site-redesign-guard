import Icon from '@/components/ui/icon'

const ContactSection = () => {
  return (
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
  )
}

export default ContactSection