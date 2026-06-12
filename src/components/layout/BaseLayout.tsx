import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';

function PageLoader() {
  return (
    <div className="container-app py-xl" role="status" aria-live="polite">
      <p className="text-secondary">Loading…</p>
    </div>
  );
}

export function BaseLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}
