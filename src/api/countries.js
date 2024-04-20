import axios from "axios";

export default {
  async getUsers() {
    try {
      const response = await axios.get(`./data.json`);
      return response.data;
    } catch (error) {
      console.error("Ошибка при получении данных: ", error);
    }
  },
};
