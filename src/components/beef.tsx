import { Link } from 'react-router-dom';
import { setAvgLiveweight, setNumberOfAnimals } from '../features/beefSlice';
import NumberCard from './numberCard';

const Beef = () => {
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
          />
          <NumberCard
            fieldName="avgLiveweight"
            label="Average liveweight (kg)"
            changeHandler={setAvgLiveweight}
          />
        </div>
      </form>
    </div>
  );
};

export default Beef;
