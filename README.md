# Santos Barbearia

Website institucional desenvolvido para a **Santos Barbearia**, com foco em presença digital, apresentação dos profissionais, serviços, contactos e marcações através de WhatsApp.

O projeto foi desenvolvido como um trabalho freelance real, desde a recolha de requisitos e tratamento do conteúdo até à implementação responsive e publicação em produção.

## Live website

[https://santosbarbearia.pt](https://santos-barbearia.netlify.app)



![Santos Barbearia website preview](./docs/desktop-preview.png)

---

## About the project

Santos Barbearia needed a simple and modern website that could present the business professionally while keeping the user journey straightforward.

The main goals were:

- Present the barbershop and its identity.
- Showcase the professionals and their specialties.
- Allow visitors to explore detailed professional profiles.
- Display business information such as address, opening hours and contact details.
- Provide direct access to WhatsApp for bookings.
- Integrate the barbershop's Google Maps location.
- Provide a good experience across desktop, tablet and mobile devices.
- Keep infrastructure and maintenance simple for a small local business.

The website is intentionally implemented as a static frontend application, since the business does not currently require authentication, a database or a dedicated backend.

---

## Tech stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

### Quality and tooling

- ESLint
- Prettier
- Git
- GitHub

### Production

- Netlify
- Automatic HTTPS
- Continuous deployment from GitHub

### Integrations

- WhatsApp deep links
- Google Maps Embed
- Telephone links
- Email links

---

## Main features

### Responsive layout

The website was designed to work across:

- Mobile phones
- Laptops
- Desktop displays

Several sections have specific mobile behavior instead of simply shrinking the desktop interface.

Examples include:

- Centered hero content on mobile.
- Simplified mobile navigation.
- Reduced footer footprint.
- Responsive professional profile dialogs.
- Repositioned location actions on mobile.
- Different image positioning according to viewport size.

---

### Professional profiles

Each professional has an interactive profile containing:

- Professional photograph
- Name
- Role and specialties
- Biography
- Available services

The profile is displayed inside a responsive modal.

On desktop, the image and content are presented side by side.

On mobile, the profile becomes a vertically scrollable layout better suited to smaller screens.

---

### WhatsApp booking

Booking actions use dynamically generated WhatsApp URLs.

Example:

```ts
export function buildWhatsAppUrl(
  phoneNumber: string,
  message: string,
): string {
  const normalizedPhone = phoneNumber.replace(/\D/g, '');

  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(
    message.trim(),
  )}`;
}
