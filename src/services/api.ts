import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/vagas", 
});

export const getVagas = async () => {
  const response = await api.get("/vagas");
  return response.data;
};
   
