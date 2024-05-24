import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorPage } from '.';

describe('Page: Home', () => {
  test('Should renders all required content', () => {
    render(<ErrorPage />, { wrapper: BrowserRouter });

    const mainTitle = screen.getByRole('heading', {
      level: 1,
      name: /^404$/i,
    });
    
    const message = screen.getByText(/^page not found$/i);
    
    expect(mainTitle).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});