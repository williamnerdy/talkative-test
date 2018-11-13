import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.dev.talkative.media/v1'
});

export const signIn = (email, password) =>
  api.post('/login/email-and-password/', {
    email,
    password
  });

export const signUp = (name, password, email) =>
  api.post('/signup/email-and-password/', {
    name,
    password,
    email
  });
