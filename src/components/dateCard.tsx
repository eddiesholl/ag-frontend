import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from '../hooks';
import InputCard from './inputCard';

interface DateCardProps {
  changeHandler: ActionCreatorWithPayload<string>;
  fieldName: string;
  label: string;
}
const DateCard = ({ fieldName, changeHandler, label }: DateCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <InputCard>
      <label
        htmlFor={fieldName}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type="date"
        name={fieldName}
        id={fieldName}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        onChange={(e) => dispatch(changeHandler(e.target.value))}
      />
    </InputCard>
  );
};

export default DateCard;
