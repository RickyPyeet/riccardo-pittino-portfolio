type AnalyticsEvent = {
  name: string;
  properties?: Record<string, string | number | boolean>;
};

export function trackPageView(path: string): void {
  if (!import.meta.env.PROD) {
    return;
  }

  trackEvent({ name: 'page_view', properties: { path } });
}

export function trackEvent(event: AnalyticsEvent): void {
  if (!import.meta.env.PROD) {
    return;
  }

  const analyticsKey = import.meta.env.VITE_ANALYTICS_KEY;

  if (!analyticsKey) {
    return;
  }

  // Privacy-focused: no PII, minimal payload
  if (typeof window !== 'undefined' && 'navigator' in window) {
    void fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Analytics-Key': analyticsKey,
      },
      body: JSON.stringify({
        ...event,
        timestamp: Date.now(),
      }),
      keepalive: true,
    }).catch(() => {
      // Silently fail — analytics should never block UX
    });
  }
}
