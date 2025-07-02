import axios from "axios";

const request = axios.create({
    baseURL: "https://686523b45b5d8d03397fe229.mockapi.io"
})

export {request}