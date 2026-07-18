export function normalizePhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/\D/g, '');
}

export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const normalizedPhone = normalizePhoneNumber(phoneNumber);
  const encodedMessage = encodeURIComponent(message.trim());

  if (!normalizedPhone) {
    throw new Error('A WhatsApp phone number is required.');
  }

  return `https://wa.me/${normalizedPhone}?text=${encodedMessage}`;
}

export function buildTelephoneUrl(phoneNumber: string): string {
  const normalizedPhone = normalizePhoneNumber(phoneNumber);

  if (!normalizedPhone) {
    throw new Error('A telephone number is required.');
  }

  return `tel:+${normalizedPhone}`;
}
