import axios, { AxiosResponse } from "axios";
import { Product } from "../models/Product";

const responseBody = (response: AxiosResponse) => response.data;

function createFormData(item: Partial<Product>) {
  const formData = new FormData();
  for (const index in item) {
    formData.append(index, item.products[index]);
  }
  //   item.products.forEach((product, index) => {
  //     for (const key in product) {
  //       formData.append(`products[${index}][${key}]`, product[key]);
  //     }
  //   });
  return formData;
}

const requests = {
  get: (url: string, params?: URLSearchParams) =>
    axios.get(url, { params }).then(responseBody),
  post: (url: string, body: unknown) =>
    axios.post(url, body).then(responseBody),
  put: (url: string, body: unknown) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
  postForm: (url: string, data: FormData) =>
    axios
      .post(url, data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody),
  putForm: (url: string, data: FormData) =>
    axios
      .put(url, data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody),
};

const Product = {
  createProduct: (product: Partial<Product>) =>
    requests.postForm("products", createFormData(product)),
  updateProduct: (product: Partial<Product>) =>
    requests.putForm("products", createFormData(product)),
  deleteProduct: (id: number) => requests.delete(`products/${id}`),
};

const agent = {
  Product,
};

export default agent;
