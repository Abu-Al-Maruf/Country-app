import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

const Countries = ({ countries, onRemoveCountry }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {countries.map((country) => {
        const countryNew = { country, id: uuidv4() };
        return (
          <Country
            onRemoveCountry={onRemoveCountry}
            key={countryNew.id}
            {...countryNew}
          />
        );
      })}
    </div>
  );
};

export default Countries;
