import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CounterApp } from '../../components/CounterApp';

describe('CounterApp', () => {
  const initialValue = 0;

  it('should match with the snapshot', () => {
    const { container } = render(<CounterApp initialValue={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  it('should show the initial value with 100', () => {
    render(<CounterApp initialValue={100} />);
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('should increment with add button', () => {
    render(<CounterApp initialValue={initialValue} />);

    fireEvent.click(screen.getByRole('button', { name: 'btn-add' }));

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should decrement with substract button', () => {
    render(<CounterApp initialValue={initialValue} />);

    fireEvent.click(screen.getByRole('button', { name: 'btn-substract' }));

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('-1');
  });

  it('should reset with reset button', () => {
    render(<CounterApp initialValue={initialValue} />);

    fireEvent.click(screen.getByRole('button', { name: 'btn-add' }));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(initialValue.toString());
  });
});
