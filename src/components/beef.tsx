import {
  selectAvgLiveweightValid,
  selectNumberOfAnimalsValid,
} from '../features/beefSlice';
import NumberCard from './numberCard';
import { useAppSelector } from '../hooks';
import BackLink from './backLink';
import { allValid } from '../utils/validation';

const Beef = () => {
  const numberOfAnimalsValidationResult = useAppSelector(
    selectNumberOfAnimalsValid
  );
  const liveweightValidationResult = useAppSelector(selectAvgLiveweightValid);

  return (
    <div>
      <BackLink
        isValid={allValid([
          numberOfAnimalsValidationResult,
          liveweightValidationResult,
        ])}
      />
      <h4>Enter Beef info:</h4>
      <form action="#">
        <div className="grid gap-4 grid-cols-2">
          <NumberCard
            groupName="beef"
            fieldName="numberOfAnimals"
            label="Number of animals"
          />
          <NumberCard
            groupName="beef"
            fieldName="avgLiveweight"
            label="Average liveweight (kg)"
          />
        </div>
      </form>
    </div>
  );
};

export default Beef;
