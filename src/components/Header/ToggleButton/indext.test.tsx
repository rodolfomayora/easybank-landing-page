import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToggleButton } from '.';

vi.mock('#icons/svg');

describe('Component: ToggleButton', () => {
  test('Should renders and handle click events', async () => {
    const user = userEvent.setup();
    const mockFn = vi.fn();
    render(
      <ToggleButton
        isExpanded={false}
        onClick={mockFn}
      />
    );

    const button = screen.getByRole('button', { expanded: false });
    await user.click(button);

    expect(mockFn).toBeCalledTimes(1);
  });
});