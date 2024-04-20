import axios from "axios";

export default {
  async getUsers() {
    try {
      const response = await axios.get("./data.json");
      this.usersData = response.data;
      console.log(this.usersData);
    } catch (error) {
      console.error("Ошибка при получении данных: ", error);
    }
  },
};
