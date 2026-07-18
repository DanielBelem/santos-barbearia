import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  it('opens and closes the mobile navigation', async () => {
    const user = userEvent.setup();

    render(<Header />);

    const toggleButton = screen.getByRole('button', {
      name: 'Abrir menu',
    });

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggleButton);

    expect(
      screen.getByRole('navigation', {
        name: 'Navegação móvel',
      }),
    ).toBeVisible();

    expect(
      screen.getByRole('button', {
        name: 'Fechar menu',
      }),
    ).toHaveAttribute('aria-expanded', 'true');
  });

  it('closes the mobile menu when a navigation link is selected', async () => {
    const user = userEvent.setup();

    render(<Header />);

    await user.click(
      screen.getByRole('button', {
        name: 'Abrir menu',
      }),
    );

    const mobileNavsBefore = screen.getAllByRole('navigation', {
      name: 'Navegação móvel',
    });

    const mobileNavigation = mobileNavsBefore[mobileNavsBefore.length - 1];

    await user.click(
      within(mobileNavigation).getByRole('link', {
        name: 'Serviços',
      }),
    );

    await waitFor(() => {
      expect(mobileNavigation).not.toBeInTheDocument();
    });
  });
});