import React, { useEffect, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./reduxstore/authSlice";
import Header from "./components/header/Header";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

    useEffect(() => {
        authService.currentUser()
            .then((userData) => {
                if (userData) dispatch(login({ userData }));
                else dispatch(logout());
            })
            .finally(() => setLoading(false));
    }, [dispatch]);

    return !loading ? (
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
          <div className="w-full block">
              <Header />
              <main>
                  <Outlet />
              </main>
          </div>
          <div className="w-full block">
              <Footer />
          </div>
      </div>
  ) : null;
}

export default App;
