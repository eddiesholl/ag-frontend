import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Business from './components/business';
import Beef from './components/beef';
import Fuel from './components/fuel';

const router = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Business />,
        },
        {
          path: '/beef',
          element: <Beef />,
        },
        {
          path: '/fuel',
          element: <Fuel />,
        },
      ],
    },
  ]);

export default router;
