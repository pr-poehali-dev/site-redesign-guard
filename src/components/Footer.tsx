import Icon from '@/components/ui/icon'

const Footer = () => {
  return (
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
  )
}

export default Footer