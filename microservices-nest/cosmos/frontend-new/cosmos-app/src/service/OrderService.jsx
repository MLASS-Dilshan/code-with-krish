import axios from "axios";

const baseUrl = 'http://localhost:3000/orders'
const customerBaseUrl = "http://localhost:3001/customers"

export const getOrders = () => {
    return axios.get(baseUrl)
}

export const createOrder = (order) => {
    return axios.post(baseUrl, order)
}

export const getOrderById = (id) => {
    return axios.get(`${baseUrl}/${id}`)
}

export const createCustomer = (customer) => {
    return axios.post(customerBaseUrl, customer)
}