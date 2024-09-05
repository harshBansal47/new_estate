"use client";
import dynamic from "next/dynamic";
import HomeMain from "../components/home";
import Wrapper from "../components/layout/Wrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "@/features/login/loginSlice";


const Index = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  const checkAuthenticate = async (token) => {
    console.log("auth check started");
    if (!token) return;
    try {
      const response = await fetch('/api/auth', {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        // body:token
      })
      console.log("api request sent");

      if (response.ok) {
        const data = await response.json();
        console.log("received response",data);
        if (data.status === "success") {
          dispatch(setLogin({
            token: data.token,
            isLoggedIn: true,
            username: data.username, // Adjust based on your response structure
            role: data.role
          }));
          localStorage.setItem('token', data.token);
        }
      }
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token",token)
    checkAuthenticate(token);
  }, [dispatch]);


  return (
    <Wrapper>
      <HomeMain />
      {/* {isLoggedIn ? <p>Welcome, {username}!</p> : <p>Please log in to continue.</p>} */}
    </Wrapper>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });