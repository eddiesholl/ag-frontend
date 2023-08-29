import { formatNumber } from '../utils/format';
import { InputResult } from '../utils/result';

interface ResultProps {
  label: string;
  inputResult: InputResult;
  className?: string;
}

const Result = ({ label, inputResult, className }: ResultProps) => {
  const content = inputResult.mapOr('-', formatNumber);
  return <span className={className}>{`${label}: ${content}`}</span>;
};

export default Result;
