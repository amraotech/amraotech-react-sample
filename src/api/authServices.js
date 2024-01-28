import axios from 'axios';

const baseURL = 'https://backend.amraotech.com/Auth-api/';

const authService = axios.create({
  baseURL,
});

export const register = async (userData) => {
  try {
    const response = await authService.post('/register/', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await authService.post('/login/', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (passwordData) => {
  try {
    const response = await authService.post('/changepassword/', passwordData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (uid, token, newPassword) => {
  try {
    const response = await authService.post(`/reset-password/${uid}/${token}/`, { newPassword });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendResetPasswordEmail = async (email) => {
  try {
    const response = await authService.post('/send-reset-password-email/', { email });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async () => {
  try {
    const response = await authService.get('/user-profile/');
    return response.data;
  } catch (error) {
    throw error;
  }
};