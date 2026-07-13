import { CTASection } from '@/components/sections/CTASection';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { TechnicalProgression} from '@/components/sections/TechnicalProgression';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { HeroSection } from '@/components/hero/HeroSection';

export default function Home() {
  return (
    <main id="main-content" aria-label="Home">
      <HeroSection />
      <FeaturedProjects />
      <TechnicalProgression/>
      <StatsSection />
      <SkillsSection />
      <CTASection />
    </main>
  );
}
