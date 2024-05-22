import { render, screen } from '@testing-library/react';
import { Container } from '.';

describe('Compoonent: Container', () => {
  test('Should renders with children prop', () => {
    const Component = () => <div>element 2</div>;
    render(
      <Container>
        <div>element 1</div>
        <Component />
      </Container>
    );

    const element1 = screen.getByText(/^element 1$/i);
    const element2 = screen.getByText(/^element 2$/i);
    
    expect(element1).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
  });
});