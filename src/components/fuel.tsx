import NumberCard from './numberCard';
import {
  selectDieselYearlyUseValid,
  selectPetrolYearlyUseValid,
  setDieselYearlyUse,
  setPetrolYearlyUse,
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
            fieldName="numberOfAnimals"
            label="Diesel yearly use (litres)"
            changeHandler={setDieselYearlyUse}
            isValid={dieselYearlyUseValidationResult.isValid}
            validationMessage={dieselYearlyUseValidationResult.reason}
          />
          <NumberCard
            fieldName="avgLiveweight"
            label="Petrol yearly use (litres)"
            changeHandler={setPetrolYearlyUse}
            isValid={petrolYearlyUseValidationResult.isValid}
            validationMessage={petrolYearlyUseValidationResult.reason}
          />
        </div>
      </form>
    </div>
  );
};

export default Fuel;
