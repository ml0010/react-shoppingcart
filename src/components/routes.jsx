import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import Home from "../pages/home";
import Tours from "../pages/tours";
import Contact from "../pages/contact";
import Cart from "../pages/cart";
import Booking from "../pages/booking";
import BookingConfirmation from "./booking/booking-confirmation";
import Login from "../pages/login";
import Join from "../pages/join";
import MyPage from "../pages/mypage";
import MyAccount from "../pages/myaccount";
import BookingSearch from "../pages/booking-search";
import { AnimatePresence } from "framer-motion";

export const RoutesWithAnimation = () => {

    const location = useLocation();

    console.log(location);

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route index element={<Navigate to="/home" />} />
                <Route path='/home' element={<Home />} />
                <Route path='/tours' element={<Tours />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/confirmation' element={<BookingConfirmation />} />
                <Route path='/login' element={<Login />} />
                <Route path='/join' element={<Join />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='/myaccount' element={<MyAccount />} />
                <Route path='/mybooking' element={<BookingSearch />} />
                <Route path='/*' element={<Home />} />
            </Routes>
        </AnimatePresence>
    )
}
