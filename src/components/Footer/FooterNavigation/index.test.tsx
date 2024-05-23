import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FooterNavigation } from '.';


describe('Component: FooterNavigation', () => {
  test('Should renders required links', () => {
    render(<FooterNavigation />, { wrapper: BrowserRouter });

    expect(screen.getByRole('link', { name: /^about us$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^contact$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^blog$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^careers$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^support$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^privacy policy$/i })).toBeInTheDocument();
  });
});