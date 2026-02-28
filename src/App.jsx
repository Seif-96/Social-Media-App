import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Auth from './Components/Auth/Auth';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import '@fontsource/cairo'; // Defaults to weight 400
// import '@fontsource/cairo/400.css'; // Specify weight

const router = createBrowserRouter([
  { index: true, element: <Auth /> },
  { path: 'register', element: <Auth /> },
  { path: 'login', element: <Auth /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: '*', element: <Notfound /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
