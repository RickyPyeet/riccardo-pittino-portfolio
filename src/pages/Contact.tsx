import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';
import { ContactForm } from '@/components/forms/ContactForm';
import { Container } from '@/components/layout/Container';
import { socialLinks } from '@/data/social';

export default function Contact() {
  return (
    <main id="main-content" aria-label="Contact">
      <Container className="py-xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h1>Get in Touch</h1>
            <p className="mt-md max-w-md">
              Interested in collaborating, hiring, or discussing an ML project?
              Send a message and I&apos;ll respond within a few business days.
            </p>

            <div className="mt-lg">
              <p className="text-small font-medium text-primary dark:text-[var(--color-text)]">
                Or reach me directly
              </p>
              <ul className="mt-3 space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-small text-accent-dark no-underline hover:underline dark:text-accent"
                      target={link.id !== 'email' ? '_blank' : undefined}
                      rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                      {link.username && (
                        <span className="text-tertiary"> — {link.username}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <FadeInOnScroll>
            <ContactForm />
          </FadeInOnScroll>
        </div>
      </Container>
    </main>
  );
}
