// apiService.ts
import data from '../../../../db.json'
export async function getPizzas() {
  // const response = await axios.get('http://localhost:3000/pizzas');
  return data.pizzas; // Предполагается, что данные приходят в массиве
}

export async function getStock() {
  //const response = await axios.get('http://localhost:3000/stock');
  return data.stock; // Предполагается, что данные приходят в массиве
}
export async function emailToFetch() {
  //const response = await axios.get('http://localhost:3000/users');
  return data.users; // Предполагается, что данные приходят в массиве
}

export async function getBeriPeki() {
  //const response = await axios.get('http://localhost:3000/beri-peki');
  return data['beri-peki']; // Предполагается, что данные приходят в массиве
}

export async function getSnacks() {
  //const response = await axios.get('http://localhost:3000/snacks');
  return data.snacks; // Предполагается, что данные приходят в массиве
}

export async function getMexican() {
  //const response = await axios.get('http://localhost:3000/mexican');
  return data.mexican; // Предполагается, что данные приходят в массиве
}

export async function getSalat() {
  //const response = await axios.get('http://localhost:3000/salat');
  return data.salat; // Предполагается, что данные приходят в массиве
}

export async function getWeight() {
  //const response = await axios.get('http://localhost:3000/salat');
  return data.massWeight; // Предполагается, что данные приходят в массиве
}

export async function getCart() {
  //const response = await axios.get('http://localhost:3000/salat');
  return data.cart; // Предполагается, что данные приходят в массиве
}