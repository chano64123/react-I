import './App.css'
import Home from './views/Home'
import Details from './views/Details'
import Cart from './views/Cart'
import NotFound from './views/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OnSale from './views/OnSale'

const App = () => {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/onsale", element: <OnSale /> },
    { path: "/details/:id", element: <Details /> },
    { path: "/*", element: <NotFound /> }
  ]);
  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
