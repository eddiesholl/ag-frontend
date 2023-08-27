export type ValidationResult =
  | { isValid: true; reason?: undefined }
  | { isValid: false; reason: string };

export const allValid = (results: ValidationResult[]) =>
  results.every((r) => r.isValid);

export const hasValue = <T>(value: T | undefined): ValidationResult => {
  if (value === undefined) {
    return { isValid: false, reason: 'Please enter a value' };
  } else {
    return { isValid: true };
  }
};
