import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from '.';

describe('Page: Home', () => {
  test('Should renders all required sections', () => {
    render(<HomePage />, { wrapper: BrowserRouter });

    const mainTitle = screen.getByRole('heading', {
      level: 1,
      name: /^next generation digital banking$/i,
    });
    
    const featureSectionTitle = screen.getByRole('heading', {
      level: 2,
      name: /^why choose easybank\?$/i,
    });

    const articleSectionTitle = screen.getByRole('heading', {
      level: 2,
      name: /^latest articles$/i,
    });

    expect(mainTitle).toBeInTheDocument();
    expect(featureSectionTitle).toBeInTheDocument();
    expect(articleSectionTitle).toBeInTheDocument();
  });
});