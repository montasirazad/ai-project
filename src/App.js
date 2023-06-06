import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import SignUp from './pages/Signup/SignUp';
import Home from './pages/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [{
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signup',
        element: <SignUp></ SignUp>
      }]
    }
  ])

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
