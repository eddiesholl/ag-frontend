import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Business from './components/business';
import Beef from './components/beef';

const router = createBrowserRouter([
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
    ],
  },
]);

export default router;
