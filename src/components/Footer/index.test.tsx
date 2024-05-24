import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '.';

vi.mock('#components/InvitationLink');
vi.mock('./SocialLinks');
vi.mock('./FooterNavigation');

describe('Component: Footer', () => {
  test('Should renders an hyperlink with aria-label', () => {
    render(<Footer />, { wrapper: BrowserRouter });
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('aria-label', 'Home Page')
  });

  test('Should renders copyright text', () => {
    render(<Footer />, { wrapper: BrowserRouter });
    const copyright = screen.getByText(/^© easybank. all rights reserved$/i);
    expect(copyright).toBeInTheDocument();
  });
});