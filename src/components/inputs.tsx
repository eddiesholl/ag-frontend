import { Outlet } from 'react-router';

export const Inputs = () => {
  return (
    <div style={{ width: '50%' }}>
      <h3>Inputs</h3>
      <Outlet />
    </div>
  );
};
