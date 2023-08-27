export type ValidationResult =
  | { isValid: true; reason?: undefined }
  | { isValid: false; reason: string };
