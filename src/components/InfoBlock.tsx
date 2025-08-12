import Icon from '@/components/ui/icon'

const InfoBlock = () => {
  return (
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
  )
}

export default InfoBlock