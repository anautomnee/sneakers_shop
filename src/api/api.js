import axios from "axios";

export const fetchProducts = async (url) => {
    try {
        const response = await axios.get(`https://66b145351ca8ad33d4f3cd70.mockapi.io/easyblog/${url}`)
        return response.data;
    } catch(error) {
        throw new Error("Error by fetching products");
    }
}

export const addToCart = async (product) => {
    try {
        await axios.post("https://66b145351ca8ad33d4f3cd70.mockapi.io/easyblog/cart", product);
    } catch(error) {
        throw new Error("Error by adding products");
    }
}

export const removeFromCart = async (id) => {
    try {
        await axios.delete(`https://66b145351ca8ad33d4f3cd70.mockapi.io/easyblog/cart/${id}`);
    } catch(error) {
        throw new Error("Error by removing products");
    }
}