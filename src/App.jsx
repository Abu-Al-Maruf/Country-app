import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Search from "./components/Search";

const url = "https://restcountries.com/v3.1/all";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);

      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter((country) => {
      return country.name.common !== name;
    });
    setFilteredCountries(filter);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
  };

  return (
    <div className="bg-slate-200">
      <h1 className=" text-center text-3xl bg-amber-600 p-2 text-white">
        Country App
      </h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h3>Loading......</h3>}
      {error && <h3>{error.message}</h3>}
      <div className="flex flex-col justify-center items-center mt-6 px-20">
        {countries && (
          <Countries
            onRemoveCountry={handleRemoveCountry}
            countries={filteredCountries}
          />
        )}
      </div>
    </div>
  );
};

export default App;
