import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

export const providerContext = createContext(null);
const cookies = new Cookies();

const Provider = ({ children }) => {
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState("");
  const [userStatus, setUserStatus] = useState("");
  useEffect(() => {
    unsubscribe();
  }, []);

  const unsubscribe = async () => {
    const token = cookies.get("access-token");

    if (token) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}user-profile/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data);
        setIsAuthenticated(true);

        setUserId(response.data.id);
        setUserRole(response.data.is_client);
      } catch (error) {
        console.error("Authentication failed:", error);
        setIsAuthenticated(false);
      } finally {
        setUserLoading(false);
      }
    } else {
      setIsAuthenticated(false);
      setUserLoading(false);
    }
  };

  const createUser = async ({
    username,
    email,
    password,
    password2,
    isClient,
    isJobSeeker,
  }) => {
    try {
     
      // console.log(response.data);
      // const { access } = response.data.token;

      // cookies.set("access-token", access, { path: "/" });

      // unsubscribe();
      console.log(response);
    } catch (error) {
      console.error("User registration failed:", error);
    }
  };

  const signInUser = async (email, password) => {
    console.log(email, password)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}login/`,
        {
          email,
          password,
        }
      );

      console.log(response.data);
      const { access } = response.data.token;

      cookies.set("access-token", access, { path: "/" });
      unsubscribe();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logOutUser = () => {
    cookies.remove("access-token");
    setUser(null);
    setIsAuthenticated(false);
  };


  const values = {
  
    user,
    userId,
    userRole,
    userStatus,
    userLoading,
    createUser,
    signInUser,
    logOutUser,
  };

  return (
    <providerContext.Provider value={values}>
      {children}
    </providerContext.Provider>
  );
};

export default Provider;

