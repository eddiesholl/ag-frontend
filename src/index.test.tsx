import { render, screen } from '@testing-library/react';
import { RouterProvider } from 'react-router';
import userEvent from '@testing-library/user-event';
import router from './routes';

beforeEach(() => {
  window.history.pushState({}, '', '/');
});

test('displays results when inputs are valid', async () => {
  const user = userEvent.setup();
  render(<RouterProvider router={router()} />);
  const beefLink = screen.getByRole('link', {
    name: 'Beef',
  });
  await user.click(beefLink);

  const numberOfAnimalsField = screen.getByRole('spinbutton', {
    name: 'Number of animals',
  });
  const avgLiveweightField = screen.getByRole('spinbutton', {
    name: 'Average liveweight (kg)',
  });

  await user.type(numberOfAnimalsField, '30');
  await user.type(avgLiveweightField, '4.222');

  await user.click(
    screen.getByRole('link', {
      name: 'Back',
    })
  );

  const fuelLink = screen.getByRole('link', {
    name: 'Fuel',
  });
  await user.click(fuelLink);

  const dieselField = screen.getByRole('spinbutton', {
    name: 'Diesel yearly use (litres)',
  });
  const petrolField = screen.getByRole('spinbutton', {
    name: 'Petrol yearly use (litres)',
  });

  await user.type(dieselField, '5.2');
  await user.type(petrolField, '6.347');

  expect(
    screen.getByText('Diesel yearly use (litres): 5.2')
  ).toBeInTheDocument();
  expect(
    screen.getByText('Petrol yearly use (litres): 6.35')
  ).toBeInTheDocument();

  expect(screen.getByText('Total fuel emissions: 0.22')).toBeInTheDocument();
  expect(
    screen.getByText('Total animal emissions: 1,266.6')
  ).toBeInTheDocument();
  expect(
    screen.getByText('Total animal weight (kg): 126.66')
  ).toBeInTheDocument();
});

/**
 * This is a pretty verbose test. It's traversing the entire app, entering values then clearing them, not trigger the invalid result states
 * Because the back button is disabled when the form is invalid, we have to make them valid again to navigate out of the child pages
 * */
test('displays results when inputs are invalid', async () => {
  const user = userEvent.setup();
  render(<RouterProvider router={router()} />);
  const beefLink = screen.getByRole('link', {
    name: 'Beef',
  });
  await user.click(beefLink);

  const numberOfAnimalsField = screen.getByRole('spinbutton', {
    name: 'Number of animals',
  });
  const avgLiveweightField = screen.getByRole('spinbutton', {
    name: 'Average liveweight (kg)',
  });

  await user.type(numberOfAnimalsField, '1');
  await user.clear(numberOfAnimalsField);
  await user.type(avgLiveweightField, '2');
  await user.clear(avgLiveweightField);

  expect(screen.getByText('Total animal emissions: -')).toBeInTheDocument();
  expect(screen.getByText('Total animal weight (kg): -')).toBeInTheDocument();

  await user.type(numberOfAnimalsField, '1');
  await user.type(avgLiveweightField, '2');

  await user.click(
    screen.getByRole('link', {
      name: 'Back',
    })
  );

  const fuelLink = screen.getByRole('link', {
    name: 'Fuel',
  });
  await user.click(fuelLink);

  const dieselField = screen.getByRole('spinbutton', {
    name: 'Diesel yearly use (litres)',
  });
  const petrolField = screen.getByRole('spinbutton', {
    name: 'Petrol yearly use (litres)',
  });

  await user.type(dieselField, '3');
  await user.clear(dieselField);
  await user.type(petrolField, '4');
  await user.clear(petrolField);

  expect(screen.getByText('Diesel yearly use (litres): -')).toBeInTheDocument();
  expect(screen.getByText('Petrol yearly use (litres): -')).toBeInTheDocument();

  expect(screen.getByText('Total fuel emissions: -')).toBeInTheDocument();
});
