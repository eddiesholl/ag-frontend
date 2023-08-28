import { formatNumber } from '../utils/format';
import { Maybe } from '../utils/maybe';

interface ResultProps {
  label: string;
  maybeValue: Maybe;
}

const Result = ({ label, maybeValue }: ResultProps) => {
  const content = maybeValue.isValid ? formatNumber(maybeValue.value) : '-';
  return <span>{`${label}: ${content}`}</span>;
};

export default Result;
