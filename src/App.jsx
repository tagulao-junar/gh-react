import React from 'react'
import { 
    Route, 
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider 
} from 'react-router-dom'


import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import SocialPage from './pages/SocialPage';
import DestinationPage from './pages/DestinationPage';
import TransportationPage from './pages/TransportationPage';




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={ <MainLayout /> }>
            <Route index element={<HomePage />} />
            <Route path='/destination' element={<DestinationPage />} />
            <Route path='/transportation' element={<TransportationPage />} />
            <Route path='/social' element={<SocialPage />} />
        </Route>
    )
);

const App = () => {
   return <RouterProvider router={router} />;
};

export default App