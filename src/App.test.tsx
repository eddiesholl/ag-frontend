import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Results area', () => {
  render(<App />);
  const resultsElement = screen.getByText(/Results/i);
  expect(resultsElement).toBeInTheDocument();
});

test('renders Inputs area', () => {
  render(<App />);
  const inputsElement = screen.getByText(/Inputs/i);
  expect(inputsElement).toBeInTheDocument();
});
