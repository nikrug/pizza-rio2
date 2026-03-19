// apiService.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export async function getPizzas() {
  const response = await axios.get(`${BASE_URL}/pizzas`);
  return response.data;
}

export async function getStock() {
  const response = await axios.get(`${BASE_URL}/stock`);
  return response.data;
}

export async function emailToFetch() {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
}

export async function getBeriPeki() {
  const response = await axios.get(`${BASE_URL}/beri-peki`);
  return response.data;
}

export async function getSnacks() {
  const response = await axios.get(`${BASE_URL}/snacks`);
  return response.data;
}

export async function getMexican() {
  const response = await axios.get(`${BASE_URL}/mexican`);
  return response.data;
}

export async function getSalat() {
  const response = await axios.get(`${BASE_URL}/salat`);
  return response.data;
}

