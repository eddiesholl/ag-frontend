import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { BrowserRouter } from 'react-router-dom';

const RenderWrapper = ({ children }: PropsWithChildren) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <BrowserRouter>{children}</BrowserRouter>
    </FormProvider>
  );
};

export default RenderWrapper;
