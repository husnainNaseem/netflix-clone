import React from 'react'
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import HomeScreen from '../Pages/HomeScreen';
import PageNotFound from '../Pages/PageNotFound';


export default function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomeScreen />} />
                    <Route exact path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
