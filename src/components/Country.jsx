const Country = ({ country, onRemoveCountry }) => {
  const { name, population, flags, capital, area } = country;

  const handleRemoveCountry = (name) => {
    onRemoveCountry(name);
  };

  return (
    <article className="bg-slate-700 hover:scale-105 duration-100 text-white rounded-md flex flex-col items-center p-4">
      <div>
        <img className="w-full h-36" src={flags.png} alt={name.common} />
        <h3 className="text-lg">
          {" "}
          <span className="text-lime-400">Name:</span> {name.common}
        </h3>
        <h3>Population: {population}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area}</h3>
        <button
          onClick={() => {
            handleRemoveCountry(name.common);
          }}
          className="bg-orange-500 px-4 py-2 rounded-md mt-4 hover:bg-slate-500 hover:text-green-400"
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default Country;
