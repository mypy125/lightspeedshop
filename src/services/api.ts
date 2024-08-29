import axios from 'axios';

const API_URL = 'https://app.ecwid.com/api/v3/58958138';

const API_TOKEN = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD';

export const getCategories = () => {
    return axios.get(`${API_URL}/categories`, {
        params: { token: API_TOKEN }
    });
};

export const getProducts = (categoryId?: number) => {
    return axios.get(`${API_URL}/products`, {
        params: { token: API_TOKEN, category: categoryId }
    });
};

export const getProductById = (productId: number) => {
    return axios.get(`${API_URL}/products/${productId}`, {
        params: { token: API_TOKEN }
    });
};