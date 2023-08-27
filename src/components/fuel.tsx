import { Link } from 'react-router-dom';
import NumberCard from './numberCard';
import { setDieselYearlyUse, setPetrolYearlyUse } from '../features/fuelSlice';

const Fuel = () => {
  return (
    <div>
      <Link to="..">Back</Link>
      <h4>Enter Fuel info:</h4>
      <form action="#">
        <div className="grid gap-4 grid-cols-2">
          <NumberCard
            fieldName="numberOfAnimals"
            label="Diesel yearly use (litres)"
            changeHandler={setDieselYearlyUse}
          />
          <NumberCard
            fieldName="avgLiveweight"
            label="Petrol yearly use (litres)"
            changeHandler={setPetrolYearlyUse}
          />
        </div>
      </form>
    </div>
  );
};

export default Fuel;
