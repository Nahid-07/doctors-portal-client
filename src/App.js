import { RouterProvider } from 'react-router-dom';
import { router } from './router/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <RouterProvider router={router}>
      <Toaster>

      </Toaster>
    </RouterProvider>
  );
}

export default App;
