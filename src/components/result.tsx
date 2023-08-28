import { formatNumber } from '../utils/format';
import { InputResult } from '../utils/result';

interface ResultProps {
  label: string;
  inputResult: InputResult;
}

const Result = ({ label, inputResult }: ResultProps) => {
  const content = inputResult.mapOr('-', formatNumber);
  return <span>{`${label}: ${content}`}</span>;
};

export default Result;
