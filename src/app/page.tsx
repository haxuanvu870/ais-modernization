import Header from '@/components/Header'
import ClientLogos from '@/components/ClientLogos'
import Testimonial from '@/components/Testimonial'
import ContactForm from '@/components/ContactForm'
import VideoAbout from '@/components/VideoAbout'
import Statistics from '@/components/Statistics'
import FAQ from '@/components/FAQ'
import ProcessSteps from '@/components/ProcessSteps'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ClientLogos />
      <Testimonial />
      <ContactForm />
      <VideoAbout />
      <Statistics />
      <FAQ />
      <ProcessSteps />
      <Footer />
    </main>
  )
}
