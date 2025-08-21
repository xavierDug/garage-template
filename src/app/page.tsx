import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection title="My garage Title" subtitle="Expertise, Transparence, Qualité" background='/assets/video/garage-video.mp4'/>
      
      <section className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card title="Service 1" description="Description du service 1" image="/img/service1.jpg"/>
        <Card title="Service 2" description="Description du service 2" image="/img/service2.jpg"/>
        <Card title="Service 3" description="Description du service 3" image="/img/service3.jpg"/>
      </section>

      <Footer />
    </>
  );
}
