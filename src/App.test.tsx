import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the main page content', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /santos/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Cuidado, estilo e precisão.',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Profissionais apaixonados pelo que fazem.',
      }),
    ).toBeInTheDocument();
  });
});
