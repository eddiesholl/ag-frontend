import { Link } from 'react-router-dom';
import {
  selectAvgLiveweightValid,
  selectNumberOfAnimalsValid,
  setAvgLiveweight,
  setNumberOfAnimals,
} from '../features/beefSlice';
import NumberCard from './numberCard';
import { useAppSelector } from '../hooks';

const Beef = () => {
  const numberOfAnimalsValidationResult = useAppSelector(
    selectNumberOfAnimalsValid
  );
  const liveweightValidationResult = useAppSelector(selectAvgLiveweightValid);

  return (
    <div>
      <Link to="..">Back</Link>
      <h4>Enter Beef info:</h4>
      <form action="#">
        <div className="grid gap-4 grid-cols-2">
          <NumberCard
            fieldName="numberOfAnimals"
            label="Number of animals"
            changeHandler={setNumberOfAnimals}
            isValid={numberOfAnimalsValidationResult.isValid}
            validationMessage={numberOfAnimalsValidationResult.reason}
          />
          <NumberCard
            fieldName="avgLiveweight"
            label="Average liveweight (kg)"
            changeHandler={setAvgLiveweight}
            isValid={liveweightValidationResult.isValid}
            validationMessage={liveweightValidationResult.reason}
          />
        </div>
      </form>
    </div>
  );
};

export default Beef;
