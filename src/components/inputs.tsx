import { selectStartDate, setStartDate } from '../features/businessSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

export const Inputs = () => {
  const startDate = useAppSelector(selectStartDate);
  const dispatch = useAppDispatch();

  return (
    <div style={{ width: '50%' }}>
      <h3>Inputs</h3>
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h4 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Business activities
        </h4>
        <form action="#">
          <div className="grid gap-4 grid-cols-2">
            <span className="col-span-2 mb-4 text-xl font-bold text-gray-900 dark:text-white">
              When did these activities happen?
            </span>
            <div className="w-full">
              <label
                htmlFor="startDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Start date
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={startDate}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={(e) => dispatch(setStartDate(e.target.value))}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="endDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                End date
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                // placeholder="Type end date"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
