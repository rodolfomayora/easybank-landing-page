import { render, screen } from '@testing-library/react';
import { InvitationLink } from '.';

describe('Component: InvitationLink', () => {
  test('Should renders correctly with required text \'request invite\'', () => {
    render(<InvitationLink />);
    const link = screen.getByRole('link', { name: /^request invite$/i });
    expect(link).toBeInTheDocument();
  });
});