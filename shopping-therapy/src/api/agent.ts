import axios, { AxiosResponse } from "axios";
import { Product } from "../models/Product";

const responseBody = (response: AxiosResponse) => response.data;
axios.defaults.baseURL = "https://localhost:7049/api/";
axios.defaults.withCredentials = true;

function createFormData(item: any) {
  const formData = new FormData();
  for (const key in item) {
    formData.append(key, item[key]);
  }

  for (const key in formData) {
    console.log(item[key]);
  }
  return formData;
}

const requests = {
  get: (url: string, params?: URLSearchParams) =>
    axios.get(url, { params }).then(responseBody),
  post: (url: string, body: unknown) =>
    axios
      .post(url, body, {
        headers: { "Content-type": "application/json" },
      })
      .then(responseBody),

  put: (url: string, body: unknown) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
  postForm: (url: string, data: FormData) =>
    axios
      .post(url, data, {
        headers: { "Content-type": "application/json" },
      })
      .then(responseBody),
  putForm: (url: string, data: FormData) =>
    axios
      .put(url, data, {
        headers: { "Content-type": "application/json" },
      })
      .then(responseBody),
};

const Product = {
  createProduct: (product: any) =>
    requests.postForm("Product", createFormData(product)),
  updateProduct: (product: any, id: number) =>
    requests.putForm(`Product?id=${id}`, createFormData(product)),
  deleteProduct: (id: number) => requests.delete(`Product/${id}`),
  getByCategory: (product: any, categoryId: number) =>
    requests.get(`Product?categoryId=${categoryId}`),
};

// const User = {
//   createProduct: (user: any) => requests.postForm("Auth", createFormData(user)),
//   updateProduct: (user: any, id: number) =>
//     requests.putForm(`Auth?id=${id}`, createFormData(user)),
//   deleteProduct: (id: number) => requests.delete(`Product/${id}`),
//   getByCategory: (user: any, categoryId: number) =>
//     requests.get(`Auth?categoryId=${categoryId}`),
// };

const Category = {
  createCategory: (category: any) =>
    requests.postForm("Category", createFormData(category)),
  updateCategory: (category: any, id: number) =>
    requests.putForm(`Category?id=${id}`, createFormData(category)),
  deleteCategory: (id: number) => requests.delete(`Category/${id}`),
};

const Cart = {
  createCart: (productId: number, quantity = 1) =>
    requests.post(`Cart/carts?productId=${productId}&quantity=${quantity}`, {}),
  deleteCart: (productId: number, quantity = 1) =>
    requests.delete(`Cart?productId=${productId}&quantity=${quantity}`),
};

const Basket = {
  createBasket: (username: string) =>
    requests.post(`Basket?userName=${username}`, {}),
};

//Order?cartId=6&userName=user
const agent = {
  Product,
  Category,
  Cart,
  Basket,
};

export default agent;
