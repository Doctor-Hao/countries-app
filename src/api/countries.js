import axios from "axios";
import helpers from "../helpers/helpers";

export default {
  async getCountries() {
    try {
      const response = await axios.get(`./data.json`);
      const countries = response.data;
      countries.forEach((country) => {
        country.population = helpers.formatPopulation(country.population);
      });
      return countries;
    } catch (error) {
      console.error("Error: ", error);
    }
  },
  async getCountryDetails(countryName) {
    try {
      const response = await axios.get(`./data.json`);
      const countries = response.data;

      countries.forEach((country) => {
        country.population = helpers.formatPopulation(country.population);
      });

      const countryData = countries.find(
        (country) => country.name === countryName,
      );

      return countryData;
    } catch (error) {
      console.error("Error: ", error);
    }
  },
};
