import { selectNumberOfAnimals } from '../features/beefSlice';
import { selectStartDate } from '../features/businessSlice';
import { selectDieselYearlyUse } from '../features/fuelSlice';
import { useAppSelector } from '../hooks';

export const Results = () => {
  const startDate = useAppSelector(selectStartDate);
  const numberOfAnimals = useAppSelector(selectNumberOfAnimals);
  const dieselYearlyUse = useAppSelector(selectDieselYearlyUse);

  return (
    <div style={{ width: '50%' }}>
      <h3>Results</h3>
      {startDate}
      {numberOfAnimals}
      {dieselYearlyUse}
    </div>
  );
};
