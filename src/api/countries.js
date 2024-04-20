import axios from "axios";

export default {
  async getCountries() {
    try {
      const response = await axios.get(`./data.json`);
      return response.data;
    } catch (error) {
      console.error("Ошибка при получении данных: ", error);
    }
  },
  async getCountryDetails(countryName) {
    try {
      const response = await axios.get(`./data.json`);
      const countries = response.data;

      const countryData = countries.find(
        (country) => country.name === countryName,
      );

      return countryData;
    } catch (error) {
      console.error("Ошибка при получении данных о стране: ", error);
    }
  },
};
