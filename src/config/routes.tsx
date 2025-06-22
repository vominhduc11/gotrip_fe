import { Navigate } from 'react-router-dom';
import DetailProduct from '../features/product/pages/DetailProduct';
import Home from '../features/home/pages/Home';
import Booking from '../features/booking/pages/Booking';
import Confirmation from '../features/auth/pages/Confirmation';
import MainLayout from '../layouts/MainLayout';

export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/home" replace /> // Khi truy cập '/', redirect đến '/home'
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/booking',
                element: <Booking />
            },
            {
                path: '/product/:id',
                element: <DetailProduct />
            }
        ]
    },
    {
        path: '/confirm', // <-- thêm param :id
        element: <Confirmation />
    }
];
