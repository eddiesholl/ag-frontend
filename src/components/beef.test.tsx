import { act, fireEvent, render, screen } from '@testing-library/react';
import Beef, { validateAvgLiveweight } from './beef';
import RenderWrapper from '../tests/RenderWrapper';
import userEvent from '@testing-library/user-event';

describe('validateAvgLiveweight', () => {
  it.each([
    [undefined, undefined, true],
    [0, 0, true],
    [1, 1, true],
    [0, 1, true],
    [1, -1, false],
  ])('.add(%s, %s)', (numberOfAnimals, avgLiveweight, expected) => {
    expect(
      validateAvgLiveweight(avgLiveweight, { beef: { numberOfAnimals } })
    ).toBe(expected ? true : 'Average liveweight must be a positive number');
  });
});

describe('Beef', () => {
  it('validates correctly', async () => {
    const user = userEvent.setup();

    render(
      <RenderWrapper>
        <Beef />
      </RenderWrapper>
    );

    const numberOfAnimalsField = screen.getByRole('spinbutton', {
      name: 'Number of animals',
    });
    const avgLiveweightField = screen.getByRole('spinbutton', {
      name: 'Average liveweight (kg)',
    });

    expect(numberOfAnimalsField).toBeInTheDocument();
    expect(avgLiveweightField).toBeInTheDocument();
    expect(screen.queryAllByText('A value is required')).toHaveLength(0);

    await user.type(numberOfAnimalsField, '1');
    expect(screen.queryAllByText('A value is required')).toHaveLength(1);

    // TODO: rerender is not occurring here
    // await user.clear(numberOfAnimalsField);
    // expect(numberOfAnimalsField).toHaveValue(null);
    // expect(avgLiveweightField).toHaveValue(null);
    // expect(screen.queryAllByText('A value is required')).toHaveLength(2);

    await user.type(avgLiveweightField, '-1');
    await user.type(numberOfAnimalsField, '2');

    expect(screen.queryAllByText('A value is required')).toHaveLength(0);
    expect(
      screen.queryAllByText('Average liveweight must be a positive number')
    ).toHaveLength(1);
  });
});
