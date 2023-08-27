import { setEndDate, setStartDate } from '../features/businessSlice';
import { Link } from 'react-router-dom';
import DateCard from './dateCard';

export const Business = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Business activities
      </h4>
      <form action="#">
        <div className="grid gap-4 grid-cols-2">
          <span className="col-span-2 mb-4 text-xl font-bold text-gray-900 dark:text-white">
            When did these activities happen?
          </span>
          <DateCard
            fieldName="startDate"
            label="Start date"
            changeHandler={setStartDate}
          />
          <DateCard
            fieldName="endDate"
            label="End date"
            changeHandler={setEndDate}
          />

          <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white col-span-2">
            Further details
          </h4>
          <div className="w-full flex justify-center">
            <Link to={'/beef'}>Beef</Link>
          </div>
          <div className="w-full flex justify-center">
            <Link to={'/fuel'}>Fuel</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Business;
