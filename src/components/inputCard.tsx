import { PropsWithChildren } from 'react';

const InputCard = ({ children }: PropsWithChildren) => {
  return <div className="w-full flex flex-col justify-stretch">{children}</div>;
};

export default InputCard;
