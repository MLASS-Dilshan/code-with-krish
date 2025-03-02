import axios from "axios"

const inventoryBaseUrl = "http://localhost:3002/inventory"

export const createProducts = (product) => {
    return axios.post(inventoryBaseUrl, product)
}

export const getProducts = (productId, quantity) => {
    const response = axios.get(
        `${inventoryBaseUrl}/${productId}/validate?quantity=${quantity}`
      );

      return response;
}