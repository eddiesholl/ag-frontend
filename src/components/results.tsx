import { useFormState, useWatch } from 'react-hook-form';
import Result from './result';
import { getResult, multiplyResults, sumResults } from '../utils/result';

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
  const totalAnimalEmissions = totalAnimalWeight.map((t) => t * 10);

  const totalFuelEmissions = sumResults(
    dieselYearlyUse.map((d) => d * 0.03),
    petrolYearlyUse.map((p) => p * 0.01)
  );

  return (
    <div className="p-6" style={{ width: '50%' }}>
      <h1>Results</h1>
      <div className="flex flex-col pt-6">
        <Result
          label="Diesel yearly use (litres)"
          inputResult={dieselYearlyUse}
        />
        <Result
          className="pb-2"
          label="Petrol yearly use (litres)"
          inputResult={petrolYearlyUse}
        />
        <Result
          className="pb-6"
          label="Total animal weight (kg)"
          inputResult={totalAnimalWeight}
        />
        <Result label="Total fuel emissions" inputResult={totalFuelEmissions} />
        <Result
          label="Total animal emissions"
          inputResult={totalAnimalEmissions}
        />
      </div>
    </div>
  );
};
