import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { setNumberOfAnimals } from '../features/beefSlice';

const Beef = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Link to="..">Back</Link>
      <h4>Enter Beef info:</h4>
      <form action="#">
        <div className="grid gap-4 grid-cols-2">
          <div className="w-full flex flex-col justify-stretch">
            <label
              htmlFor="numberOfAnimals"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Number of animals
            </label>
            <input
              type="number"
              name="numberOfAnimals"
              onChange={(e) => dispatch(setNumberOfAnimals(e.target.value))}
            />
          </div>
          <div className="w-full flex flex-col justify-stretch">
            <label
              htmlFor="numberOfAnimals"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Average liveweight (kg)
            </label>
            <input type="text" name="numberOfAnimals" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Beef;
