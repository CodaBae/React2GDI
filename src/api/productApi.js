import axios from "axios";

const API_URL = "https://reactecomgdi.onrender.com/api"


const getProduct =  async () => {
   let result =  await axios.get(`${API_URL}/products`)
    return result.data
}



export  default getProduct