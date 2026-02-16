// apiService.ts
import axios from 'axios';

export async function getPizzas() {
  const response = await axios.get('http://localhost:3000/pizzas');
  return response.data; // Предполагается, что данные приходят в массиве
}

export async function getStock() {
  const response = await axios.get('http://localhost:3000/stock');
  return response.data; // Предполагается, что данные приходят в массиве
}
export async function emailToFetch() {
  const response = await axios.get('http://localhost:3000/users');
  return response.data; // Предполагается, что данные приходят в массиве
}

export async function getBeriPeki() {
  const response = await axios.get('http://localhost:3000/beri-peki');
  return response.data; // Предполагается, что данные приходят в массиве
}

export async function getSnacks() {
  const response = await axios.get('http://localhost:3000/snacks');
  return response.data; // Предполагается, что данные приходят в массиве
}

export async function getMexican() {
  const response = await axios.get('http://localhost:3000/mexican');
  return response.data; // Предполагается, что данные приходят в массиве
}

export async function getSalat() {
  const response = await axios.get('http://localhost:3000/salat');
  return response.data; // Предполагается, что данные приходят в массиве
}