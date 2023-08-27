import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from '../hooks';
import InputCard from './inputCard';

interface NumberCardProps {
  changeHandler: ActionCreatorWithPayload<string>;
  fieldName: string;
  label: string;
  isValid?: boolean;
  validationMessage?: string;
}
const NumberCard = ({
  fieldName,
  changeHandler,
  label,
  isValid = true,
  validationMessage,
}: NumberCardProps) => {
  const dispatch = useAppDispatch();

  const inputColor = isValid ? 'gray' : 'red';

  const labelClasses = `block mb-2 text-sm font-medium text-${inputColor}-900`;
  const inputClasses = `bg-${inputColor}-50 border border-${inputColor}-300 text-${inputColor}-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`;
  return (
    <InputCard>
      <label htmlFor={fieldName} className={labelClasses}>
        {label}
      </label>
      <input
        type="number"
        name={fieldName}
        id={fieldName}
        className={inputClasses}
        onChange={(e) => dispatch(changeHandler(e.target.value))}
      />
      {!isValid && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {validationMessage}
        </p>
      )}
    </InputCard>
  );
};

export default NumberCard;
