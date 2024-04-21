import axios from "axios";

export default {
  async getCountryName(alpha3Codes) {
    try {
      const response = await axios.get(`./data.json`);
      const countries = response.data;

      const countryNames = alpha3Codes.map((alpha3Code) => {
        const countryData = countries.find(
          (country) => country.alpha3Code === alpha3Code,
        );
        return countryData ? countryData.name : null;
      });

      return countryNames.filter((name) => name !== null);
    } catch (error) {
      console.error("Error: ", error);
    }
  },
  formatPopulation(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
};
