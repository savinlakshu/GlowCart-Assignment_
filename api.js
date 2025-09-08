import axios from 'axios';
const api = axios.create({ baseURL: 'https://dummyjson.com' });
export async function fetchProducts() {
  const res = await api.get('/products?limit=100');
  return res.data.products;
}