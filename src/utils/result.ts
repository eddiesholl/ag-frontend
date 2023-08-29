import { get, sum } from 'lodash';
import { Result, isErr, isOk, ok } from 'true-myth/result';

export type InputResult = Result<number, string>;

/**
 * getResult extract a value or error from react-hook-form data structures. Either option gets safely packaged with a Result
 * @date 29/08/2023 - 14:58:21
 *
 * @param {object} formValues
 * @param {object} errors
 * @param {string} path
 * @param {number} defaultValue
 * @returns {Result<number, string>}
 */
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

// NOTE: Just a few quick tools are added here for now, to help unpack true-myth Result objects

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
