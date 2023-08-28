import { useFormState, useWatch } from 'react-hook-form';
import Result from './result';
import { getMaybe } from '../utils/maybe';

export const Results = () => {
  const { errors } = useFormState();
  const formValues = useWatch();

  const dieselYearlyUse = getMaybe(
    formValues,
    errors,
    'fuel.dieselYearlyUse',
    0
  );
  const petrolYearlyUse = getMaybe(
    formValues,
    errors,
    'fuel.petrolYearlyUse',
    0
  );

  return (
    <div style={{ width: '50%' }}>
      <h3>Results</h3>
      <div className="flex flex-col">
        <Result
          label="Diesel yearly use (litres)"
          maybeValue={dieselYearlyUse}
        />
        <Result
          label="Petrol yearly use (litres)"
          maybeValue={petrolYearlyUse}
        />
      </div>
    </div>
  );
};
