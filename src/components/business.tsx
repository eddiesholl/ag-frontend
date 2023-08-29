import { Link } from 'react-router-dom';
import InputCard from './inputCard';

const groupName = 'business';
export const Business = () => {
  return (
    <div>
      <h4 className="mb-4">Business activities</h4>
      <form action="#">
        <div className="grid gap-4 grid-cols-2">
          <span className="col-span-2 mb-4">
            When did these activities happen?
          </span>
          <InputCard
            groupName={groupName}
            fieldName="startDate"
            label="Start date"
            type="date"
          />
          <InputCard
            groupName={groupName}
            fieldName="endDate"
            label="End date"
            type="date"
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
