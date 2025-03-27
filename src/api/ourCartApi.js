import axios from "axios";

const API_URL = "https://reactecomgdi.onrender.com/api";

const addToCart = async (userId, productId, quantity) => {
  let result = await axios.post(`${API_URL}/cart`, {
    userId,
    productId,
    quantity,
  });

  return result.data;
};

const getCart = async (userId) => {
  let result = await axios.get(`${API_URL}/cart/${userId}`);
  return result.data;
};

export { addToCart, getCart };
