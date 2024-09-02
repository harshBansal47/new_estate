"use client";
import dynamic from "next/dynamic";
import HomeMain from "../components/home";
import Wrapper from "../components/layout/Wrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, logout } from "@/features/login/loginSlice";
import { setCredential, clearCredentials } from "@/features/login/authSlice";

const Index = () => {
  const dispatch = useDispatch();

  // Select states from Redux
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.login.username);
  const role = useSelector((state) => state.login.role);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const expiresAt = useSelector((state) => state.auth.expiresAt);


  // Hydrate Redux state from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");
      const storedExpiresAt = localStorage.getItem("expiresAt");
      const storedUsername = localStorage.getItem("username");
      const storedRole = localStorage.getItem("role");
      const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";

      if (storedToken && storedUser && storedExpiresAt && storedIsLoggedIn) {
        const expiresAt = parseInt(storedExpiresAt, 10);
        if (Date.now() < expiresAt) {
          // Valid token, dispatch actions to hydrate Redux state
          dispatch(setCredential({ token: storedToken, expiresAt, user: JSON.parse(storedUser) }));
          dispatch(setLogin({ username: storedUsername, isLoggedIn: true, role: storedRole }));
        } else {
          // Token expired, clear stored credentials
          dispatch(clearCredentials());
          dispatch(logout());
        }
      } else {
        // No valid session, clear Redux state
        dispatch(clearCredentials());
        dispatch(logout());
      }
    }
  }, [dispatch]);

  // Synchronize localStorage with authentication state
  useEffect(() => {
    if (isAuthenticated && token && user) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("expiresAt", expiresAt.toString());
      localStorage.setItem("username", user.username);
      localStorage.setItem("role", user.role);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      // Clear localStorage if not authenticated
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("expiresAt");
      localStorage.removeItem("username");
      localStorage.removeItem("role");
      localStorage.setItem("isLoggedIn", "false");
    }
  }, [isAuthenticated, isLoggedIn, token, expiresAt, username, role]);

  return (
    <Wrapper>
      <HomeMain />
      {isLoggedIn ? <p>Welcome, {username}!</p> : <p>Please log in to continue.</p>}
    </Wrapper>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
