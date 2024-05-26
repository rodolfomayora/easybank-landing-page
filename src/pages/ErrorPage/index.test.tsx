import { render, screen } from '@testing-library/react';
import { ErrorPage } from '.';

vi.mock('vite-react-ssg');

describe('Page: Home', () => {
  test('Should renders all required content', () => {
    render(<ErrorPage />);

    const mainTitle = screen.getByRole('heading', {
      level: 1,
      name: /^404$/i,
    });
    
    const message = screen.getByText(/^page not found$/i);
    
    expect(mainTitle).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});