import Icon from '@/components/ui/icon'

const BenefitsSection = () => {
  return (
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
  )
}

export default BenefitsSection