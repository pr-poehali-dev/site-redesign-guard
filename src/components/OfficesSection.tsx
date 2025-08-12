import Icon from '@/components/ui/icon'

const OfficesSection = () => {
  return (
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
  )
}

export default OfficesSection