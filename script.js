// Simpele animatie voor secties
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

// Smooth scroll voor CTA's
const scrollTargets = document.querySelectorAll('a[href^="#"], [data-scroll-target]');
scrollTargets.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    const targetId = href && href.startsWith('#')
      ? href.substring(1)
      : link.getAttribute('data-scroll-target');
    const target = targetId ? document.getElementById(targetId) : null;
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const WHATSAPP_NUMBER = '31640326650';

function openWhatsAppWithText(text) {
  const encoded = encodeURIComponent(text || 'Ik wil een gratis website + hosting en zoek groei.');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
}

// Buttons met standaard WhatsApp-bericht
const genericButtons = document.querySelectorAll('.js-whatsapp');
genericButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (button.tagName.toLowerCase() === 'a') return; // ankers laten hun eigen gedrag volgen
    e.preventDefault();
    const message = button.getAttribute('data-message');
    openWhatsAppWithText(message);
  });
});

// Form CTA die ingevulde gegevens meeneemt zodat wij terugbellen
const formButtons = document.querySelectorAll('.js-form-whatsapp');
formButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const form = button.closest('form');
    const naam = form?.querySelector('input[name="naam"]')?.value?.trim() || '';
    const email = form?.querySelector('input[name="email"]')?.value?.trim() || '';
    const tel = form?.querySelector('input[name="telefoon"]')?.value?.trim() || '';
    const doel = form?.querySelector('textarea[name="doel"]')?.value?.trim() || '';
    const tekst = [
      'Bel mij terug over een gratis website + hosting.',
      naam ? `Naam: ${naam}` : null,
      tel ? `Telefoon: ${tel}` : 'Telefoon: (vul aub in)',
      email ? `E-mail: ${email}` : null,
      doel ? `Doel: ${doel}` : null,
    ].filter(Boolean).join('\n');
    openWhatsAppWithText(tekst);
  });
});
