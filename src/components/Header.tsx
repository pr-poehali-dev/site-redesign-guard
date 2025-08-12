import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const Header = () => {
  return (
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
  )
}

export default Header