import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "../Pages/HomeScreen";
import PageNotFound from "../Pages/PageNotFound";
import LoginScreen from "../Pages/LoginScreen";
import { auth } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import ProfileScreen from "../Pages/ProfileScreen";

export default function AppRoutes() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
            //login
            dispatch(login({
                uid: userAuth.uid,
                email: userAuth.email,
            }))
        } else {
            //logged out
            dispatch(logout());
        }
      });

      return unsubscribe
  },[dispatch])

  return (
    <div>
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/profile" element={<ProfileScreen />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}
