import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';

interface BackLinkProps {
  isValid: boolean;
}

const BackLink = ({ isValid }: BackLinkProps) => {
  const [message, setMessage] = useState('');
  const onBack = (e: SyntheticEvent) => {
    if (!isValid) {
      e.preventDefault();
      setMessage('Please fix validation errors before continuing');
    }
  };
  return (
    <div className="flex flex-col">
      <Link onClick={onBack} onKeyUp={onBack} to="..">
        Back
      </Link>
      {!isValid && <span className="text-red-500">{message}</span>}
    </div>
  );
};

export default BackLink;
