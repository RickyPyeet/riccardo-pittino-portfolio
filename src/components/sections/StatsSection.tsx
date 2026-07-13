import { Container } from '@/components/layout/Container';
import { StatCard } from '@/components/cards/StatCard';

const stats = [
  { value: '3', label: 'Deep Learning Systems Built' },
  { value: '3', label: 'Architectures Reimplemented' },
  { value: '1M+', label: 'Training Steps Exectuted' },
  { value: '0', label: 'Technical Articles Published' },
];

export function StatsSection() {
  return (
    <section aria-labelledby="stats-heading" className="bg-background-light py-xl dark:bg-[var(--color-bg-subtle)]">
      <Container>
        <h2 id="stats-heading" className="sr-only">
          Statistics
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
