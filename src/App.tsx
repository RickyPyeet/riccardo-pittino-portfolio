import { lazy, useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom';

import { BaseLayout } from '@/components/layout/BaseLayout';
import { trackPageView } from '@/services/analytics';

const Home = lazy(() => import('@/pages/Home'));
const Projects = lazy(() => import('@/pages/Projects'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const Articles = lazy(() => import('@/pages/Articles'));
const ArticleDetail = lazy(() => import('@/pages/ArticleDetail'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function AnalyticsTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
}

function ScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppShell() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <AnalyticsTracker />
      <ScrollRestoration />
      <BaseLayout />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Projects /> },
      { path: '/projects/:slug', element: <ProjectDetail />},
      { path: '/articles', element: <Articles /> },
      { path: '/articles/:slug', element: <ArticleDetail /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/privacy', element: <PrivacyPolicy /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
