import { RouterProvider } from 'react-router-dom';

import { router } from './constants/Routes';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
