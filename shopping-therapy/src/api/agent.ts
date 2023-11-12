import axios, { AxiosResponse } from "axios";
import { Product } from "../models/Product";

const responseBody = (response: AxiosResponse) => response.data;
axios.defaults.baseURL = "https://localhost:7049/api/";

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
};

const agent = {
  Product,
};

export default agent;
