import { Container } from '@/components/layout/Container';
import { siteMeta } from '@/data/social';
import { socialLinks } from '@/data/social';

export default function PrivacyPolicy() {
  return (
    <main id="main-content" aria-label="Privacy policy">
      <Container className="py-xl">
        <h1>Privacy Policy</h1>
        <p className="mt-md text-tiny text-tertiary">
          Last updated: June 2026
        </p>

        <div className="mt-lg max-w-2xl space-y-6">
          <section>
            <h2>Overview</h2>
            <p className="mt-2">
              {siteMeta.name} respects your privacy. This policy explains what
              data is collected and how it is used when you visit this site or
              submit the contact form.
            </p>
          </section>

          <section>
            <h2>Contact Form</h2>
            <p className="mt-2">
              When you submit the contact form, we collect your name, email
              address, subject, and message solely to respond to your inquiry.
              This data is not sold or shared with third parties.
            </p>
          </section>

          <section>
            <h2>Analytics</h2>
            <p className="mt-2">
              We may use privacy-focused analytics to understand page views and
              navigation patterns. No personally identifiable information is
              collected through analytics.
            </p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p className="mt-2">
              This site does not use tracking cookies. Local storage may be
              used to save contact form drafts for your convenience.
            </p>
          </section>

        </div>
      </Container>
    </main>
  );
}
