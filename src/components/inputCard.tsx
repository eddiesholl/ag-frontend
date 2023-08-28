import { useFormContext } from 'react-hook-form';
import { HTMLInputTypeAttribute, useEffect, useMemo } from 'react';
import { get } from 'lodash';

interface NumberCardProps {
  fieldName: string;
  groupName: string;
  label: string;
  type: HTMLInputTypeAttribute;
  validate?: (value: any, formValues: any) => boolean | string;
}
const InputCard = ({
  groupName,
  fieldName,
  label,
  type,
  validate,
}: NumberCardProps) => {
  const {
    register,
    formState: { errors },
    watch,
    trigger,
  } = useFormContext();
  const fieldId = useMemo(
    () => `${groupName}.${fieldName}`,
    [fieldName, groupName]
  );

  /**
   * react-hook-form doesn't trigger validation when the value of a field changes, only on submit. This is a sensible default or standard forms,
   * but this app is much more interactive and immediate. See here for more discussion:
   * https://github.com/orgs/react-hook-form/discussions/10267#discussioncomment-5602998
   **/
  useEffect(() => {
    const { unsubscribe } = watch(() => trigger());
    return () => unsubscribe();
  }, [watch, trigger]);

  const errorForField = get(errors, fieldId);

  const isValid = errorForField === undefined;

  const inputColor = isValid ? 'gray' : 'red';

  const labelClasses = `block mb-2 text-sm font-medium text-${inputColor}-900`;
  const inputClasses = `bg-${inputColor}-50 border border-${inputColor}-300 text-${inputColor}-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`;

  return (
    <div className="w-full flex flex-col justify-stretch">
      <label htmlFor={fieldId} className={labelClasses}>
        {label}
      </label>
      <input
        {...register(fieldId, { required: 'A value is required', validate })}
        type={type}
        id={fieldId}
        className={inputClasses}
      />
      {!isValid && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errorForField.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default InputCard;
