import { selectNumberOfAnimals } from '../features/beefSlice';
import { selectStartDate } from '../features/businessSlice';
import { useAppSelector } from '../hooks';

export const Results = () => {
  const startDate = useAppSelector(selectStartDate);
  const numberOfAnimals = useAppSelector(selectNumberOfAnimals);

  return (
    <div style={{ width: '50%' }}>
      <h3>Results</h3>
      {startDate}
      {numberOfAnimals}
    </div>
  );
};
