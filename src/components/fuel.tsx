import NumberCard from './numberCard';
import {
  selectDieselYearlyUseValid,
  selectPetrolYearlyUseValid,
} from '../features/fuelSlice';
import { useAppSelector } from '../hooks';
import BackLink from './backLink';
import { allValid } from '../utils/validation';

const Fuel = () => {
  const dieselYearlyUseValidationResult = useAppSelector(
    selectDieselYearlyUseValid
  );
  const petrolYearlyUseValidationResult = useAppSelector(
    selectPetrolYearlyUseValid
  );

  return (
    <div>
      <BackLink
        isValid={allValid([
          dieselYearlyUseValidationResult,
          petrolYearlyUseValidationResult,
        ])}
      />
      <h4>Enter Fuel info:</h4>
      <form action="#">
        <div className="grid gap-4 grid-cols-2">
          <NumberCard
            groupName="fuel"
            fieldName="dieselYearlyUse"
            label="Diesel yearly use (litres)"
          />
          <NumberCard
            groupName="fuel"
            fieldName="petrolYearlyUse"
            label="Petrol yearly use (litres)"
          />
        </div>
      </form>
    </div>
  );
};

export default Fuel;
