
import './App.css';
import Nav from './components/navbar/Navbar';
import Preco from './components/precard/preco';
import Lamula from './components/precard/lamula';
import Lamula2 from './components/precard/lamula2';
import Lamula3 from './components/precard/lamula3';
import Lamula4 from './components/precard/lamula4';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([

  {
    path: "/",
    element: <><Nav /> <Preco/> <Lamula/></>
    
     
     
  },
 
]);
    return (
    <RouterProvider router={router} />
  )
}

export default App;
