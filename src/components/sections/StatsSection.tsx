import { Container } from '@/components/layout/Container';
import { StatCard } from '@/components/cards/StatCard';

const stats = [
  { value: '12+', label: 'Projects Shipped' },
  { value: '8', label: 'Technical Articles' },
  { value: '4', label: 'Years in ML' },
  { value: '3', label: 'Open Source Tools' },
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
