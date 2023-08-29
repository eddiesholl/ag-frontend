import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import BackLink from './backLink';

describe('backLink', () => {
  it('prevents navigation when form is invalid', () => {
    render(
      <BrowserRouter>
        <BackLink isValid={false} />
      </BrowserRouter>
    );
    expect(
      screen.queryByText(/Please fix validation errors before continuing/i)
    ).not.toBeInTheDocument();
    const backLink = screen.getByText(/Back/i);
    fireEvent.click(backLink);
    expect(
      screen.getByText(/Please fix validation errors before continuing/i)
    ).toBeInTheDocument();
  });
});
