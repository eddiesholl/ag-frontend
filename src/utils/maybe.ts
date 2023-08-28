import { get } from 'lodash';

type Value = {
  isValid: true;
  value: number;
};
type Error = {
  isValid: false;
  reason: string;
};

export type Maybe = Value | Error;

export const getMaybe = (
  formValues: object,
  errors: object,
  path: string,
  defaultValue: number
): Maybe => {
  const value = get(formValues, path, defaultValue);
  const error = get(errors, path);

  if (error) {
    return {
      isValid: false,
      reason: error.message,
    };
  } else {
    return {
      value,
      isValid: true,
    };
  }
};
