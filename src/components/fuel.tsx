import { useFormState } from 'react-hook-form';
import { get } from 'lodash';
import InputCard from './inputCard';
import BackLink from './backLink';

const groupName = 'fuel';

const Fuel = () => {
  const { errors } = useFormState({ name: groupName });
  const isValid = get(errors, groupName) === undefined;

  return (
    <div>
      <BackLink isValid={isValid} />
      <h4 className="py-3">Enter Fuel info:</h4>
      <form action="#">
        <div className="grid gap-4 grid-cols-2">
          <InputCard
            groupName={groupName}
            fieldName="dieselYearlyUse"
            label="Diesel yearly use (litres)"
            type="number"
          />
          <InputCard
            groupName={groupName}
            fieldName="petrolYearlyUse"
            label="Petrol yearly use (litres)"
            type="number"
          />
        </div>
      </form>
    </div>
  );
};

export default Fuel;
