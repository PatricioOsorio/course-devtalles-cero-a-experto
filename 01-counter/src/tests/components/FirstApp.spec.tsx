import { render, screen } from '@testing-library/react';
import { FirstApp } from '../../components/FirstApp';
import '@testing-library/jest-dom';

describe('FirstApp', () => {
  const title = 'Hello';
  const subtitle = 'World';
  const name = 'John Doe';

  //   it('should match with the snapshot', () => {
  //     const { container } = render(<FirstApp title={title} subtitle={subtitle} name={name} />);

  //     expect(container).toMatchSnapshot();
  //   });

  it('should show the title on h1', () => {
    render(<FirstApp title={title} subtitle={subtitle} name={name} />);

    expect(screen.getByRole('heading', { level: 1, name: title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: title }).textContent).toBe(title);
  });

  it('should show the title "hello"', () => {
    render(<FirstApp title={title} subtitle={subtitle} name={name} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
