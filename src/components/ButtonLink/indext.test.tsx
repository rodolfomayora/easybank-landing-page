import { render, screen } from '@testing-library/react';
import { ButtonLink } from '.';

describe('Component: ButtonLink', () => {
  test('Should renders a link with required props', () => {
    render(<ButtonLink href='/pathname'>Test</ButtonLink>);
    const link = screen.getByRole('link', { name: /^test$/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href');
  });
});