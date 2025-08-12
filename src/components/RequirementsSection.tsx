import Icon from '@/components/ui/icon'

const RequirementsSection = () => {
  return (
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
  )
}

export default RequirementsSection