import { useFormState, useWatch } from 'react-hook-form';
import Result from './result';
import { getResult, multiplyResults } from '../utils/result';

export const Results = () => {
  const { errors } = useFormState();
  const formValues = useWatch();

  const dieselYearlyUse = getResult(
    formValues,
    errors,
    'fuel.dieselYearlyUse',
    0
  );
  const petrolYearlyUse = getResult(
    formValues,
    errors,
    'fuel.petrolYearlyUse',
    0
  );

  const numberOfAnimals = getResult(
    formValues,
    errors,
    'beef.numberOfAnimals',
    0
  );

  const averageLiveweight = getResult(
    formValues,
    errors,
    'beef.avgLiveweight',
    0
  );

  const totalAnimalWeight = multiplyResults(numberOfAnimals, averageLiveweight);

  return (
    <div style={{ width: '50%' }}>
      <h3>Results</h3>
      <div className="flex flex-col">
        <Result
          label="Diesel yearly use (litres)"
          inputResult={dieselYearlyUse}
        />
        <Result
          label="Petrol yearly use (litres)"
          inputResult={petrolYearlyUse}
        />
        <Result
          label="Total animal weight (kg)"
          inputResult={totalAnimalWeight}
        />
        <Result label="Total fuel emissions" inputResult={petrolYearlyUse} />
        <Result label="Total animal emissions" inputResult={petrolYearlyUse} />
      </div>
    </div>
  );
};
