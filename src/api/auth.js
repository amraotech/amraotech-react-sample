// auth.js
import api from './api';

export const register = async (userData) => {
  try {
    const response = await api.post('/register/', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post('/login/', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (passwordData) => {
  try {
    const response = await api.post('/changepassword/', passwordData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (uid, token, newPassword) => {
  try {
    const response = await api.post(`/reset-password/${uid}/${token}/`, { newPassword });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendResetPasswordEmail = async (email) => {
  try {
    const response = await api.post('/send-reset-password-email/', { email });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async () => {
  try {
    const response = await api.get('/user-profile/');
    return response.data;
  } catch (error) {
    throw error;
  }
};
