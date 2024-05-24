import { render, screen } from '@testing-library/react';
import { SocialLinks } from '.';

vi.mock('#icons/svg');

describe('Component: SocialLinks', () => {
  test('Should render external links correctly', () => {
    render(<SocialLinks />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'external noopener noreferrer');
      expect(link).toHaveAttribute('aria-label');
    });
  });
});