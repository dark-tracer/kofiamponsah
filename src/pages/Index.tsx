import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProgrammeSection from '@/components/ProgrammeSection';
import EulogySection from '@/components/EulogySection';
import GallerySection from '@/components/GallerySection';
import ClosingSection from '@/components/ClosingSection';
import MemorialFooter from '@/components/MemorialFooter';

const Index = () => {
  return (
    <main className="bg-charcoal-deep min-h-screen">
      <Navigation />
      <HeroSection />
      <ProgrammeSection />
      <EulogySection />
      <GallerySection />
      <ClosingSection />
      <MemorialFooter />
    </main>
  );
};

export default Index;
