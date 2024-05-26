import { render, screen } from '@testing-library/react';
import { DesktopNavigation } from '.';

describe('Component: DesktopNavigation', () => {
  test('Should renders al required internal navigation links', () => {
    render(<DesktopNavigation />);
    
    expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^about$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^contact$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^blog$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^careers$/i })).toBeInTheDocument();
  });

  test('Should renders only internal navigation links', () => {
    render(<DesktopNavigation />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('href');
      expect(link).not.toHaveAttribute('target');
      expect(link).not.toHaveAttribute('rel');
    });
  });
});