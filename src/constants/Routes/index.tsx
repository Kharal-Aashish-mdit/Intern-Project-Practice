import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../../pages/Home';
import LoginForm from '../../components/Login';
import RegisterForm from '../../pages/Register';
import RegisterPageForm from '../../pages/Register';
import LoginPageForm from '../../pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },

  {
    path: '/login',
    element: <LoginPageForm/>,
  },
  {
    path: '/register',
    element: <RegisterPageForm/>
  },
]);
