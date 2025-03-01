import axios from "axios";

const baseUrl = 'http://localhost:3000/orders'

export const getOrders = () => {
    return axios.get(baseUrl)
}

export const createOrder = (order) => {
    return axios.post(baseUrl, order)
}