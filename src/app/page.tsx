import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import PolymerConcreteSection from '@/components/home/PolymerConcreteSection';
import CorrosionSection from '@/components/home/CorrosionSection';
import SolutionSection from '@/components/home/SolutionSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <PolymerConcreteSection />
      <CorrosionSection />
      <SolutionSection />
    </div>
  );
}
