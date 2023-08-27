export const formatNumber = (value: number | undefined) =>
  new Intl.NumberFormat('en-AU', {
    maximumFractionDigits: 2,
  }).format(value || 0);
