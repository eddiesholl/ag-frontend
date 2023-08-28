import { get, sum } from 'lodash';
import { Result, isErr, isOk, ok } from 'true-myth/result';

export type InputResult = Result<number, string>;

export const getResult = (
  formValues: object,
  errors: object,
  path: string,
  defaultValue: number
): Result<number, string> => {
  const value = get(formValues, path, defaultValue);
  const error = get(errors, path);

  if (error) {
    return Result.err(error.message);
  } else {
    return Result.ok(value);
  }
};

export const operateOnResultList =
  (transformer: (numbers: number[]) => number) =>
  (...results: InputResult[]): InputResult => {
    const errors = results.filter(isErr);

    if (errors.length > 0) {
      return errors[0];
    } else {
      const values = results.filter(isOk).map((maybe) => maybe.value);
      const result = transformer(values);

      return ok(result);
    }
  };

export const sumResults = operateOnResultList(sum);

export const multiplyResults = operateOnResultList((values) =>
  values.reduce((acc, value) => acc * value, 1)
);
