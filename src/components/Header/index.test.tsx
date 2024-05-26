import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '.';

vi.mock('#icons/svg');
vi.mock('#components/InvitationLink');
vi.mock('./DesktopNavigation');
vi.mock('./MobileNavigation');

describe('Component: Header', () => {
  test('Should renders header correctly', () => {
    render(<Header />);
    const header = document.body.querySelector('header');
    expect(header).toBeInTheDocument();
  });

  test('Should renders a logo with correct link to home page and aria-label', () => {
    render(<Header />);
    const link = screen.getByRole('link', { name: /^home page$/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/sub-path/');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  test('Mobile Navigation should be initially hidden (collapsed)', () => {
    render(<Header />);
    const button = screen.getByRole('button', { expanded: false });
    const [_, mobileNavigation] = screen.getAllByRole('navigation');

    expect(button).toBeInTheDocument();
    expect(mobileNavigation).toBeInTheDocument();
    expect(mobileNavigation).toHaveAttribute('aria-expanded', 'false');
  });

  test('Mobile Navigation should to expand and collapse (toggle)', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const button = screen.getByRole('button', { expanded: false });
    const [_, mobileNavigation] = screen.getAllByRole('navigation');
    await user.click(button);

    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(mobileNavigation).toHaveAttribute('aria-expanded', 'true');

    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(mobileNavigation).toHaveAttribute('aria-expanded', 'false');
  });
});