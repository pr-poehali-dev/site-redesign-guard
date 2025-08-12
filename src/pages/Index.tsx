import { useState } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import InfoBlock from '@/components/InfoBlock'
import BenefitsSection from '@/components/BenefitsSection'
import StatisticsSection from '@/components/StatisticsSection'
import RequirementsSection from '@/components/RequirementsSection'
import ApplicationForm from '@/components/ApplicationForm'
import ConsultationForm from '@/components/ConsultationForm'
import ContactSection from '@/components/ContactSection'
import OfficesSection from '@/components/OfficesSection'
import Footer from '@/components/Footer'

const Index = () => {
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    region: '',
    profession: '',
    experience: '',
    message: ''
  })

  const [consultationForm, setConsultationForm] = useState({
    name: '',
    phone: ''
  })

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Заявка на контракт:', applicationForm)
  }

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Заявка на консультацию:', consultationForm)
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <HeroSection />
      <InfoBlock />
      <BenefitsSection />
      <StatisticsSection />
      <RequirementsSection />
      <ApplicationForm 
        applicationForm={applicationForm}
        setApplicationForm={setApplicationForm}
        handleApplicationSubmit={handleApplicationSubmit}
      />
      <ConsultationForm 
        consultationForm={consultationForm}
        setConsultationForm={setConsultationForm}
        handleConsultationSubmit={handleConsultationSubmit}
      />
      <ContactSection />
      <OfficesSection />
      <Footer />
    </div>
  )
}

export default Index