import { useAppSelector } from '../hooks';
import { RootState } from '../store';

interface ResultProps {
  label: string;
  selector: (state: RootState) => number | string | undefined;
}

const Result = ({ label, selector }: ResultProps) => {
  const value = useAppSelector(selector);
  return <span>{`${label}: ${value}`}</span>;
};

export default Result;
