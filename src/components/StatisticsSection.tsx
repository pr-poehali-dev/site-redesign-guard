const StatisticsSection = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">В ЦИФРАХ</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-blue-800 p-8 rounded-lg">
            <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">300+</div>
            <p className="text-xl">военных специальностей</p>
          </div>
          <div className="bg-blue-800 p-8 rounded-lg">
            <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">85</div>
            <p className="text-xl">субъектов РФ</p>
          </div>
          <div className="bg-blue-800 p-8 rounded-lg">
            <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">204+</div>
            <p className="text-xl">тысяч рублей в месяц</p>
          </div>
          <div className="bg-blue-800 p-8 rounded-lg">
            <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">24/7</div>
            <p className="text-xl">поддержка</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection