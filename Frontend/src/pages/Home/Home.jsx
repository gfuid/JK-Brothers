import Hero from '../../components/Hero';
import Collections from '../../components/Collections';
import Stats from '../../components/Stats';
import AboutUs from '../../components/AboutUs';
import WhyChooseUs from '../../components/WhyChooseUs';
import Testimonials from '../../components/Testimonials';
import Brands from '../../components/Brands';

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Collections />
      <Stats />
      <AboutUs />
      <WhyChooseUs />
      <Testimonials />
      <Brands />
    </div>
  );
}
