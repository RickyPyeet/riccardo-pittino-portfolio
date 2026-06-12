import { Link } from 'react-router-dom';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main id="main-content" aria-label="Page not found">
      <Container className="py-xl text-center">
        <p className="text-h1 font-medium text-accent-dark dark:text-accent">404</p>
        <h1 className="mt-2">Page not found</h1>
        <p className="mx-auto mt-md max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-lg">
          <Button to="/">Back to home</Button>
        </div>
        <Link
          to="/projects"
          className="mt-4 inline-block text-small text-accent-dark no-underline hover:underline dark:text-accent"
        >
          Browse projects instead
        </Link>
      </Container>
    </main>
  );
}
