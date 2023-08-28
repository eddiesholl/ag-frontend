import { useFormState } from 'react-hook-form';
import { get } from 'lodash';
import InputCard from './inputCard';
import BackLink from './backLink';

const groupName = 'beef';

const Beef = () => {
  const { errors } = useFormState({ name: groupName });
  const isValid = get(errors, groupName) === undefined;

  return (
    <div>
      <BackLink isValid={isValid} />
      <h4>Enter Beef info:</h4>
      <form action="#">
        <div className="grid gap-4 grid-cols-2">
          <InputCard
            groupName={groupName}
            fieldName="numberOfAnimals"
            label="Number of animals"
            type="number"
          />
          <InputCard
            groupName={groupName}
            fieldName="avgLiveweight"
            label="Average liveweight (kg)"
            type="number"
          />
        </div>
      </form>
    </div>
  );
};

export default Beef;
