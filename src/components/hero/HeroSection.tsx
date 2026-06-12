import { Container } from '@/components/layout/Container';

import { HeroButtons } from './HeroButtons';
import { HeroSubtitle } from './HeroSubtitle';
import { HeroTitle } from './HeroTitle';
import { HeroVisual } from './HeroVisual';

export function HeroSection() {
  return (
    <section aria-label="Introduction" className="py-xl lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <HeroTitle />
            <HeroSubtitle />
            <HeroButtons />
          </div>
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
