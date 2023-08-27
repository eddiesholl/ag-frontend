export type ValidationResult =
  | { isValid: true; reason?: undefined }
  | { isValid: false; reason: string };

export const allValid = (results: ValidationResult[]) =>
  results.every((r) => r.isValid);
