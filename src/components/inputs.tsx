import { Outlet } from 'react-router';

export const Inputs = () => {
  return (
    <div className="p-6" style={{ width: '50%' }}>
      <h1>Inputs</h1>
      <div className="pt-6">
        <Outlet />
      </div>
    </div>
  );
};
