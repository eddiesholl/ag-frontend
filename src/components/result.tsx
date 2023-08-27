import { useMemo } from 'react';
import { useAppSelector } from '../hooks';
import { RootState } from '../store';
import { formatNumber } from '../utils/format';

interface ResultProps {
  label: string;
  selector: (state: RootState) => number | undefined;
}

const Result = ({ label, selector }: ResultProps) => {
  const value = useAppSelector(selector);
  const formatted = useMemo(() => formatNumber(value), [value]);
  return <span>{`${label}: ${formatted}`}</span>;
};

export default Result;
