import { describe, expect, it } from 'vitest';
import { buildTelephoneUrl, buildWhatsAppUrl, normalizePhoneNumber } from './contact';

describe('contact utilities', () => {
  it('removes non-numeric characters from phone numbers', () => {
    expect(normalizePhoneNumber('+351 912 345 678')).toBe('351912345678');
  });

  it('builds an encoded WhatsApp URL', () => {
    expect(buildWhatsAppUrl('+351 912 345 678', 'Olá, quero marcar.')).toBe(
      'https://wa.me/351912345678?text=Ol%C3%A1%2C%20quero%20marcar.',
    );
  });

  it('builds a telephone URL', () => {
    expect(buildTelephoneUrl('+351 912 345 678')).toBe('tel:+351912345678');
  });

  it('rejects an empty phone number', () => {
    expect(() => buildTelephoneUrl('')).toThrow('A telephone number is required.');
  });
});
