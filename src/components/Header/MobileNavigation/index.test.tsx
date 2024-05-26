import { render, screen } from '@testing-library/react';
import { MobileNavigation } from '.';

describe('Component: MobileNavigation', () => {
  test('Should renders al required internal navigation links', () => {
    render(<MobileNavigation />);
    
    expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^about$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^contact$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^blog$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^careers$/i })).toBeInTheDocument();
  });

  test('Should renders only internal navigation links', () => {
    render(<MobileNavigation />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('href');
      expect(link).not.toHaveAttribute('target');
      expect(link).not.toHaveAttribute('rel');
    });
  });
});