import React, { Component } from "react";
import "./App.css";
import CountryList from "./covid-19-cases/components/CountryList/CountryList";
import Searchbox from "./covid-19-cases/components/SearchBox/Searchbox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      stats: [],
      searchField: "",
    };
  }
  async componentDidMount() {
    const response = await fetch("https://api.covid19api.com/countries");
    const countries = await response.json();
    this.setState({ countries });

    this.state.countries.forEach(async (country) => {
      const response = await fetch(
        `https://api.covid19api.com/total/country/${country.Slug}`
      );

      const data = await response.json();
      if (data.length)
        this.setState((prevState) => ({
          stats: prevState.stats.concat({
            ...data[data.length - 1],
            CountryCode: country.ISO2,
          }),
        }));
    });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { stats, searchField } = this.state;

    const filteredCountries = stats.filter((country) =>
      country.Country.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <Searchbox
          placeholder="Enter country name"
          handleChange={this.handleChange}
        />
        <CountryList stats={filteredCountries} />
      </div>
    );
  }
}
export default App;
