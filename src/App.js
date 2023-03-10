import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Username from './components/Username';
import PageNotFound from './components/PageNotFound';
import Password from './components/Password';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import Register from './components/Register';
import Profile from './components/Profile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Username />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/password',
        element: <Password />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/recovery',
        element: <Recovery />
    },
    {
        path: '/reset',
        element: <Reset />
    },
    {
        path: '*',
        element: <PageNotFound />
    }
])

function App() {
    return (<main>

        <RouterProvider router={router}></RouterProvider>
    </main>
    )
}

export default App